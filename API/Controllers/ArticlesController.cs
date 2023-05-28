using API.Database.DbModels;
using API.DTOs.Articles;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;


// Controller for Articles and Articles comments


[ApiController]
[Route("[controller]")]
public class ArticlesController : ControllerBase
{
    private readonly DatabaseDbContext _dbContext;

    public ArticlesController(DatabaseDbContext dbContext)
    {
        _dbContext = dbContext;
    }
    
    
    
    [HttpGet("GetAllArticles"), Authorize(Roles = "Admin,Editor")]
    public async Task<ActionResult<List<Article>>> GetAllArticles()
    {
        var articles = await _dbContext.Articles.Include(i => i.Images)
                                                          .Include(c => c.Comments)
                                                          .ToListAsync();
        return Ok(articles);
    }

    [HttpGet("GetApprovedArticles")]
    public async Task<ActionResult<List<Article>>> GetApprovedArticles()
    {
        var approvedArticles = await _dbContext.Articles.Where(approved => approved.IsApproved == true)
            .Include(i => i.Images)
            .Include(c => c.Comments)
            .ToListAsync();
        return Ok(approvedArticles);
    }
    
    [HttpPost("CreateArticle"), Authorize(Roles = "Admin,Editor")]
    public async Task<ActionResult> CreateArticle(AddArticleDTO articleDto)
    {
        Article article = new Article();
        
        article.IsApproved = false;
        article.Name = articleDto.Name;
        article.Content = articleDto.Content;
        article.CreatedBy = articleDto.CreatedBy;
        article.Date = DateTime.Now.ToLocalTime();

        _dbContext.Articles.Add(article);

        await _dbContext.SaveChangesAsync();

        return (Ok("Článok bol vytvorený!"));
    }
    
    [HttpDelete("DeleteArticle/{id:int}"), Authorize(Roles = "Admin")]
    public async Task<ActionResult> DeleteArticle(int id)
    {
        var articleToDelete = await _dbContext.Articles.FindAsync(id);

        if (articleToDelete == null)
        {
            return BadRequest("Článok nebol nájdený!");
        }

        await _dbContext.Articles.Where(article => article.Id == id).ExecuteDeleteAsync();
        await _dbContext.SaveChangesAsync();
        
        return Ok("Článok bol vymazaný!");
    }

    [HttpPut("ModifyArticle/{id:int}"), Authorize(Roles = "Admin")]
    public async Task<ActionResult> ModifyArticle(AddArticleDTO modifyDTO, int id)
    {
        var articleToModify = await _dbContext.Articles.FindAsync(id);

        if (articleToModify == null)
            return BadRequest("Článok sa nenašiel!");

        articleToModify.Name = modifyDTO.Name;
        articleToModify.Content = modifyDTO.Content;
        articleToModify.CreatedBy = modifyDTO.CreatedBy;

        _dbContext.Articles.Update(articleToModify);
        await _dbContext.SaveChangesAsync();
        
        return Ok("Článok bol upravený!");
    }

    [HttpPut("ApproveArticle/{id:int}"), Authorize(Roles = "Admin")]
    public async Task<ActionResult> ApproveArticle(int id)
    {
        var articleToApprove = await _dbContext.Articles.FindAsync(id);

        if (articleToApprove == null) 
            return BadRequest("Článok nebol nájdeny! Skontroluj ID");
        
        articleToApprove.IsApproved = true;
        _dbContext.Articles.Update(articleToApprove);
        await _dbContext.SaveChangesAsync();
            
        return Ok("Článok bol schváleny!");

    }
    [HttpPut("DisapproveArticle/{id:int}"), Authorize(Roles = "Admin")]
    public async Task<ActionResult> DisapproveArticle(int id)
    {
        var articleToApprove = await _dbContext.Articles.FindAsync(id);

        if (articleToApprove == null) 
            return BadRequest("Článok nebol nájdeny! Skontroluj ID");
        
        articleToApprove.IsApproved = false;
        _dbContext.Articles.Update(articleToApprove);
        await _dbContext.SaveChangesAsync();
            
        return Ok("Článok bol odstráneny spomedzi schválených článkov!");

    }

}