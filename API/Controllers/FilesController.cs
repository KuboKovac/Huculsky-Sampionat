using API.Database.DbModels;
using API.DTOs.Image;
using API.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[ApiController]
[Route("[controller]")]
public class FilesController: ControllerBase
{
    private readonly WebRootService _webRootService;
    private readonly DatabaseDbContext _dbContext;
    
    public FilesController(WebRootService webRootService, DatabaseDbContext dbContext)
    {
        _webRootService = webRootService;
        _dbContext = dbContext;
    }
    
    [HttpGet("GetImagesByCategory/{category}")]
    public async Task<ActionResult> GetImagesByCategory(string category)
    {
        var images = await _dbContext.Images
            .Where(i => i.Category == category)
            .ToListAsync();
        
        return Ok(images);
    }
    
    [HttpPost("CreateImages/{category}"), Authorize(Roles = "Admin")]
    public async Task<ActionResult> CreateImage([FromForm] IEnumerable<IFormFile> files, string category)
    {
        if (files == null || !files.Any())
        {
            return BadRequest("No files uploaded.");
        }

        try
        {
            var imageUrls = await _webRootService.StoreFilesAsync(files);

            var newImages = new List<Image>();

            foreach (var imageUrl in imageUrls)
            {
                var newImage = new Image
                {
                    Url = $"{Request.Scheme}://{Request.Host}/static/{imageUrl}",
                    Category = category,
                    Visible = true,
                    DateOfCreation = DateTime.Now
                };
            
                await _dbContext.Images.AddAsync(newImage);
                newImages.Add(newImage);
            }

            await _dbContext.SaveChangesAsync();

            return Ok(newImages);
        }
        catch (Exception ex)
        {
            return StatusCode(500, $"Internal server error: {ex.Message}");
        }
    }
    
    [HttpPut("ChangeVisibilityOfImage"), Authorize(Roles = "Admin")]
    public async Task<ActionResult> ChangeVisibilityOfImage(ChangeVisibilityDTO visibilityDto)
    {
        var imageToModify = await _dbContext.Images.FindAsync(visibilityDto.Id);
        if (imageToModify == null)
        {
            return NotFound("Obrazok nebol nájdený!");
        }
        
        imageToModify.Visible = visibilityDto.Visibility;
        _dbContext.Images.Update(imageToModify);
        await _dbContext.SaveChangesAsync();
        
        return Ok("Obrázok bol skrytý!");
        
    }
    
    [HttpDelete("DeleteImage/{id:int}"), Authorize(Roles = "Admin")]
    public async Task<ActionResult> DeleteImage(int id)
    {
        var imageToDelete = await _dbContext.Images.FindAsync(id);
        if (imageToDelete == null)
        {
            return NotFound("Obrazok nebol nájdený!");
        }
        
        bool isFileDeleted = _webRootService.DeleteFile(imageToDelete.Url); // Assuming ImagePath is the property that holds the URL

        if (!isFileDeleted)
        {
            return StatusCode(500, "Nepodarilo sa odstrániť súbor z disku!");
        }
        _dbContext.Images.Remove(imageToDelete);
        await _dbContext.SaveChangesAsync();
        
        return Ok("Obrazok bol odstránený!");
        
    }

    [HttpGet("GetRandomizedImages")]
    public async Task<ActionResult> GetRandomizedImages()
    {
        var images = await _dbContext.Images
            .Where(i => i.Visible)
            .ToListAsync();
        Shuffle(images);

        var randomizedImages = images.Take(9).ToList();
        return Ok(randomizedImages);
    }
    
    // Fisher-Yates shuffle algorithm
    private static Random rng = new Random();

    private void Shuffle<T>(IList<T> list)
    {
        int n = list.Count;
        while (n > 1)
        {
            n--;
            int k = rng.Next(n + 1);
            (list[k], list[n]) = (list[n], list[k]);
        }
    }

}