using API.Database.DbModels;
using API.DTOs.Arbiter;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;


[ApiController]
[Route("[controller]")]
public class ArbitersController : ControllerBase
{
    private readonly DatabaseDbContext _dbContext;
    
    public ArbitersController(DatabaseDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    [HttpGet("GetAllArbiters"), Authorize]
    public async Task<ActionResult<List<Arbiter>>> GetAllArbiters()
    {
        var arbiters = await _dbContext.Arbiter.ToListAsync();

        return Ok(arbiters);
    }
    
    [HttpPost("CreateArbiter"), Authorize(Roles = "Admin")]
    public async Task<ActionResult> CreateArbiter(ArbiterDTO arbiterDto)
    {
        Arbiter newArbiter = new Arbiter();

        newArbiter.FirstName = arbiterDto.FirstName;
        newArbiter.LastName = arbiterDto.LastName;

        _dbContext.Arbiter.Add(newArbiter);
        await _dbContext.SaveChangesAsync();
        
        return Ok("Rozhodca bol vytvoreý úspešne!");
    }

    [HttpPut("UpdateArbiter/{id:int}"), Authorize(Roles = "Admin")]
    public async Task<ActionResult> UpdateArbiter(int id, ArbiterDTO arbiterDto)
    {
        var arbiterToUpdate = await _dbContext.Arbiter.FindAsync(id);

        if (arbiterToUpdate == null)
            return BadRequest("Rozhodca nebol nájdený!");

        arbiterToUpdate.FirstName = arbiterDto.FirstName;
        arbiterToUpdate.LastName = arbiterDto.LastName;

        _dbContext.Arbiter.Update(arbiterToUpdate);
        await _dbContext.SaveChangesAsync();

        return Ok("Rozhodca bol úspešne upravený!");
    }

    [HttpDelete("DeleteArbiter/{id:int}"), Authorize(Roles = "Admin")]
    public async Task<ActionResult> DeleteArbiter(int id)
    {
        var arbiterToDelete = await _dbContext.Arbiter.FindAsync(id);

        if (arbiterToDelete == null)
            return BadRequest("Rozhodca nebol nájdený!");

        _dbContext.Arbiter.Remove(arbiterToDelete);
        await _dbContext.SaveChangesAsync();

        return Ok("Rozhodca bol úspešne odstránený!");
    }

}