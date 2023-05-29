using API.Database.DbModels;
using API.DTOs.Riders;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;


[ApiController]
[Route("[controller]")]
public class RidersController : ControllerBase
{
    private readonly DatabaseDbContext _dbContext;
    public RidersController(DatabaseDbContext dbContext)
    {
        _dbContext = dbContext;
    }
    
    [HttpGet("GetAllRiders"), Authorize]
    public async Task<ActionResult<List<RiderDTO>>> GetAllRiders()
    {
        var riders = await _dbContext.Riders
            .Select(rider => new RiderDTO
            {
                FirstName = rider.FirstName,
                LastName = rider.LastName,
                Category = rider.Category,
                RiderNumber = rider.RiderNumber,
                DateOfbirth = rider.DateOfBirth
            }).ToListAsync();
        
        return Ok(riders);
    }

    
    [HttpGet("GetRaiderDetails/{id:int}"), Authorize]
    public async Task<ActionResult<Rider>> GetRaiderDetails(int id)
    {
        
        if (await _dbContext.Riders.FindAsync(id) == null)
            return BadRequest("Jazdec nebol nájdený!");

        var riderDetails = await _dbContext.Riders.Where(rider => rider.Id == id)
            .Include(comp => comp.Competitions)
            .Include(img => img.Images).ToListAsync();


        return Ok(riderDetails.First());
    }
    
    [HttpPost("CreateNewRider"), Authorize(Roles = "Admin")]
    public async Task<ActionResult> CreateNewRider(RiderDTO riderDto)
    {
        var possibleDuplicate = await _dbContext.Riders.Where(rider => rider.RiderNumber == riderDto.RiderNumber)
            .FirstOrDefaultAsync();
        
        
        if (possibleDuplicate != null)
        {
            return BadRequest("Jazdec s rovnakým číslom už existuje!");
        }
        
        Rider newRider = new Rider();

        newRider.Category = riderDto.Category;
        newRider.FirstName = riderDto.FirstName;
        newRider.LastName = riderDto.LastName;
        newRider.DateOfBirth = riderDto.DateOfbirth;
        newRider.RiderNumber = riderDto.RiderNumber;
        
        _dbContext.Riders.Add(newRider);
        await _dbContext.SaveChangesAsync();
        
        return Ok("");
    }

    [HttpDelete("DeleteRaider/{id:int}"), Authorize(Roles = "Admin")]
    public async Task<ActionResult> DeleteRaider(int id)
    {
        var riderToDelete = await _dbContext.Riders.FindAsync(id);

        if (riderToDelete == null)
        {
            return BadRequest("Jazdec nebol nájdený!");
        }
        _dbContext.Riders.Remove(riderToDelete);
        await _dbContext.SaveChangesAsync();
        
        return Ok("Jazdec bol úspešne odstráneny!");
    }

    [HttpPut("UpdateRider/{id:int}"), Authorize(Roles = "Admin")]
    public async Task<ActionResult> UpdateRider(int id, RiderDTO riderDto)
    {
        var riderToUpdate = await _dbContext.Riders.FindAsync(id);

        if (riderToUpdate == null)
        {
            return BadRequest("Jazdec nebol nájdený!");
        }
        
        riderToUpdate.Category = riderDto.Category;
        riderToUpdate.FirstName = riderDto.FirstName;
        riderToUpdate.LastName = riderDto.LastName;
        riderToUpdate.DateOfBirth = riderDto.DateOfbirth;
        riderToUpdate.RiderNumber = riderDto.RiderNumber;

        _dbContext.Riders.Update(riderToUpdate);
        await _dbContext.SaveChangesAsync();
        
        return Ok("Jazdec bol úspešne upravený!");
    }
}