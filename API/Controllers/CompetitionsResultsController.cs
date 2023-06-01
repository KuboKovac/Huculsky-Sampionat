using API.Database.DbModels;
using API.DTOs.Competition;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;


// Controller for Competitions and Competitions Results


[ApiController]
[Route("[controller]")]
public class CompetitionsResultsController : ControllerBase
{
    private readonly DatabaseDbContext _dbContext;
    public CompetitionsResultsController(DatabaseDbContext dbContext)
    {
        _dbContext = dbContext;
    }


    [HttpGet("GetAllCompetitions"), Authorize]
    public async Task<ActionResult<CompetitionDTO>> GetAllCompetitions()
    {
        var competitions = await _dbContext.Competitions.Select(competition => new CompetitionDTO
        {
            Name = competition.Name,
            Description = competition.Description,
            Date = competition.Date
        }).ToListAsync();
        
        return Ok(competitions);
    }

    [HttpPost("CreateCompetition"), Authorize(Roles = "Admin")]
    public async Task<ActionResult> CreateCompetition(CompetitionDTO competitionDto)
    {
        var arbiter = await _dbContext.Arbiter.FindAsync(competitionDto.ArbiterId);

        if (arbiter == null)
            return BadRequest("Id rozhodcu neexistuje!");

        Competition newCompetition = new Competition();

        newCompetition.Name = competitionDto.Name;
        newCompetition.Description = competitionDto.Description;
        newCompetition.Date = competitionDto.Date;
        newCompetition.Arbiter = arbiter;

        _dbContext.Competitions.Add(newCompetition);
        await _dbContext.SaveChangesAsync();
        
        return Ok("Súťaž bola úspešne vytvorená!");
    }

    [HttpDelete("DeleteCompetition/{id:int}")]
    public async Task<ActionResult> DeleteCompetition(int id)
    {
        var competitionToDelete = await _dbContext.Competitions.FindAsync(id);

        if (competitionToDelete == null)
            return BadRequest("Súťaž s id " + id + " sa nenašla!");

        _dbContext.Competitions.Remove(competitionToDelete);
        await _dbContext.SaveChangesAsync();
        
        return Ok("Súťaž bola úspešne vymazána!");
    }



}