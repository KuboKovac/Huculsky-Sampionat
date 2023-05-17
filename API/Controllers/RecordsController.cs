using API.Database.DbModels;
using API.DTOs.Riders;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;


// Controller for Riders, Horses, Coaches and Arbiters


[ApiController]
[Route("[controller]")]

public class RecordsController : ControllerBase
{
    private readonly DatabaseDbContext _dbContext;
    public RecordsController(DatabaseDbContext dbContext)
    {
        _dbContext = dbContext;
    }
    
    [HttpGet("GetAllRiders")]
    public async Task<ActionResult> GetAllRiders()
    {
        var riders = await _dbContext.Riders
            .Include(p => p.Images)
            .Include(p => p.Competitions)
            .Include(p => p.Results)
            .ToListAsync();
        return Ok(riders);
    }

    [HttpPost("CreateNewRider")]
    public async Task<ActionResult> CreateNewRider(RiderDTO riderDto)
    {
        _dbContext.Riders.Add(new Rider
        {
            FirstName = riderDto.FirstName,
            LastName = riderDto.LastName,
            Category = riderDto.Category,
            DateOfBirth = riderDto.DateOfbirth
        });
        await _dbContext.SaveChangesAsync();
        
        return Ok("Jazdec bol úspešne pridaný do databázy!");
    }
}