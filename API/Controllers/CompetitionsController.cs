using API.Database.DbModels;
using API.DTOs.Arbiter;
using API.DTOs.Competition;
using API.DTOs.Riders;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;


[ApiController]
[Route("[controller]")]
public class CompetitionsController : ControllerBase
{
    private readonly DatabaseDbContext _dbContext;
    public CompetitionsController(DatabaseDbContext dbContext)
    {
        _dbContext = dbContext;
    }
    
    [HttpGet("GetAllCompetitions"), Authorize]
    public async Task<ActionResult<CompetitionDTO>> GetAllCompetitions()
    {
        var competitions = await _dbContext.Competitions.Select(competition => new CompetitionDTO
        {
            Id = competition.Id,
            Name = competition.Name,
            Description = competition.Description,
            Date = competition.Date
        }).ToListAsync();
        
        return Ok(competitions);
    }

    [HttpPost("CreateCompetition"), Authorize(Roles = "Admin")]
    public async Task<ActionResult> CreateCompetition(CompetitionDTO competitionDto)
    {
        Competition newCompetition = new Competition();

        newCompetition.Name = competitionDto.Name;
        newCompetition.Description = competitionDto.Description;
        newCompetition.Date = competitionDto.Date;

        _dbContext.Competitions.Add(newCompetition);
        await _dbContext.SaveChangesAsync();

        var savedCompetition =
            await _dbContext.Competitions
                .Where(comp => comp.Name == newCompetition.Name && comp.Date == newCompetition.Date)
                .FirstOrDefaultAsync();
        if (savedCompetition == null)
            return BadRequest("Interná chyba serveru! Súťaž sa pravdepodobne neuložila správne!");
        
        
        RidersListDTO ridersToAssign = new RidersListDTO
        {
            RidersIds = competitionDto.RidersIds
        };
        ArbitersListDTO arbitersToAssign = new ArbitersListDTO
        {
            ArbitersIds = competitionDto.ArbitersIds
        };

        await AssignRidersToCompetition(savedCompetition.Id, ridersToAssign);
        await AssignArbitersToCompetition(savedCompetition.Id, arbitersToAssign);
        
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

    [HttpPut("AssignRidersToCompetition/{id:int}"), Authorize(Roles = "Admin,Arbiter")]
    public async Task<ActionResult> AssignRidersToCompetition(int id, RidersListDTO ridersListDto)
    {
        var competition = await _dbContext.Competitions.Where(comp => comp.Id == id)
            .Include(r => r.Riders)
            .FirstOrDefaultAsync();
        
        if (competition == null)
            return BadRequest("Súťaž sa nenašla!");

        foreach (var riderId in ridersListDto.RidersIds)
        {
            var rider = await _dbContext.Riders.Where(rider => rider.Id == riderId)
                .Include(c => c.Competitions)
                .FirstOrDefaultAsync();

            if (rider == null)
                return BadRequest("Jazdec s id " + riderId + " nebol nájdeny!");
            
            competition.Riders.Add(rider);
        }

        await _dbContext.SaveChangesAsync();
        
        return Ok("Jazdci boli úspešne zaregistrovaný do súťaže " + competition.Name + "!");
    }

    [HttpPut("RemoveRidersFromCompetition/{id:int}"), Authorize(Roles = "Admin,Arbiter")]
    public async Task<ActionResult> RemoveRidersFromCompetition(int id, RidersListDTO ridersListDto)
    {
        var competition = await _dbContext.Competitions.Where(comp => comp.Id == id)
            .Include(r => r.Riders)
            .FirstOrDefaultAsync();

        if (competition == null)
            return BadRequest("Súťaž nebola nájdená!");

        foreach (var riderId in ridersListDto.RidersIds)
        {
            var rider = await _dbContext.Riders.Where(rider => rider.Id == riderId)
                .Include(c => c.Competitions)
                .FirstOrDefaultAsync();

            if (rider == null)
                return BadRequest("Jazdec s id " + riderId + " nebol nájdeny!");
            
            competition.Riders.Remove(rider);
        }

        await _dbContext.SaveChangesAsync();
        
        return Ok("Jazdci boli úspešne odhlásený zo súťaže " + competition.Name + "!");
    }

    [HttpPut("AssingArbitersToCompetition/{id:int}"), Authorize(Roles = "Admin,Arbiter")]
    public async Task<ActionResult> AssignArbitersToCompetition(int id, ArbitersListDTO arbitersListDto)
    {
        var competition = await _dbContext.Competitions.Where(c => c.Id == id)
            .Include(a => a.Arbiters)
            .FirstOrDefaultAsync();
        
        if (competition == null)
            return BadRequest("sútaž nebola nájdena!");
        
        foreach (var arbiterId in arbitersListDto.ArbitersIds)
        {
            var arbiter = await _dbContext.Arbiter.Where(arbiter => arbiter.Id == arbiterId)
                .Include(c => c.Competitions)
                .FirstOrDefaultAsync();

            if (arbiter == null)
                return BadRequest("Rozhodca s id " + arbiterId + " nebol nájdeny!");
            
            competition.Arbiters.Add(arbiter);
        }

        await _dbContext.SaveChangesAsync();
        
        return Ok("Rozhodci boli úspešne zaregistrovaný do súťaže " + competition.Name + "!");
    }

    [HttpPut("RemoveArbitersFromCompetition/{competitionId:int}"), Authorize(Roles = "Admin,Arbiter")]
    public async Task<ActionResult> RemoveArbitersFromCompetition(int id, ArbitersListDTO arbitersListDto)
    {
        var competition = await _dbContext.Competitions.Where(c => c.Id == id)
            .Include(a => a.Arbiters)
            .FirstOrDefaultAsync();
        
        if (competition == null)
            return BadRequest("sútaž nebola nájdena!");
        
        foreach (var arbiterId in arbitersListDto.ArbitersIds)
        {
            var arbiter = await _dbContext.Arbiter.Where(arbiter => arbiter.Id == arbiterId)
                .Include(c => c.Competitions)
                .FirstOrDefaultAsync();

            if (arbiter == null)
                return BadRequest("Rozhodca s id " + arbiterId + " nebol nájdeny!");
            
            competition.Arbiters.Remove(arbiter);
        }

        await _dbContext.SaveChangesAsync();
        
        return Ok("Rozhodci boli úspešne odstránený zo súťaže " + competition.Name + "!");
    }
    
}