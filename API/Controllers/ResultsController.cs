using API.Database.DbModels;
using API.DTOs.Results;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[ApiController]
[Route("[controller]")]
public class ResultsController : ControllerBase
{
    private readonly DatabaseDbContext _dbContext;
    
    public ResultsController(DatabaseDbContext dbContext)
    {
        _dbContext = dbContext;       
    }
    
    
    [HttpPost("CreateResult/{raiderId:int}"), Authorize(Roles = "Admin,Arbiter")]
    public async Task<ActionResult> CreateResult(ResultsDTO resultsDto,int raiderId)
    {
        var rider = await _dbContext.Riders.Where(raider => raider.Id == raiderId)
            .Include(result => result.Results)
            .FirstOrDefaultAsync();
        
        if (rider == null)
            return BadRequest("Jazdec sa nenašiel!");
        
        Result newResult = new Result();
        Obstacles newObstacles = new Obstacles();

        newObstacles.L = resultsDto.L;
        newObstacles.Z = resultsDto.Z;
        newObstacles.Koliska = resultsDto.Koliska;
        newObstacles.Plachta = resultsDto.Plachta;
        newObstacles.Štvorec = resultsDto.Štvorec;
        newObstacles.Cuvanie_Medzi_Kavaletami = resultsDto.Cuvanie_Medzi_Kavaletami;
        newObstacles.Lavička_Vyššia = resultsDto.Lavička_Vyššia;
        newObstacles.Mostík_Najazdova_Rampa = resultsDto.Mostík_Najazdova_Rampa;
        newObstacles.Slalom = resultsDto.Slalom;
        newObstacles.Stužky = resultsDto.Stužky;
        newObstacles.Nízky_Podjazd = resultsDto.Nízky_Podjazd;
        newObstacles.Skok = resultsDto.Skok;
        newObstacles.Lano_Bránička = resultsDto.Lano_Bránička;
        newObstacles.Uzka_Ulička_Zvonec = resultsDto.Uzka_Ulička_Zvonec;
        newObstacles.Košík_Preniesť_Krčah = resultsDto.Košík_Preniesť_Krčah;
        newObstacles.Kavalety_4_ks = resultsDto.Kavalety_4_ks;
        newObstacles.Technický_Prekrok = resultsDto.Technický_Prekrok;
        newObstacles.Labyrint = resultsDto.Labyrint;
        newObstacles.Zastavenie_Cúvanie_Pri_Kužeľke = resultsDto.Zastavenie_Cúvanie_Pri_Kužeľke;
        newObstacles.Skok_50cm = resultsDto.Skok_50cm;
        newObstacles.Sud_Kavaleta = resultsDto.Sud_Kavaleta;
        newObstacles.Ťah_Vreca = resultsDto.Ťah_Vreca;
        newObstacles.Fit_Lopta = resultsDto.Fit_Lopta;
        newObstacles.Paleta_Státie = resultsDto.Paleta_Státie;

        _dbContext.Obstacles.Add(newObstacles);
        

        newResult.Time = resultsDto.Time;
        newResult.TotalPoints = resultsDto.TotalPoints;
        newResult.PointsAtObstacles = newObstacles;
        newResult.TimeLimit = resultsDto.TimeLimit;
        
        _dbContext.Results.Add(newResult);
        rider.Results.Add(newResult);
        
        
        await _dbContext.SaveChangesAsync();
        
        return Ok("Nový výsledok bol vytvorený!");
    }

    [HttpGet("GetResultByID/{resultId:int}"), Authorize]
    public async Task<ActionResult<Result>> GetResultById(int resultId)
    {
        return Ok();
    }

    [HttpGet("GetResultsByRider/{riderID:int}"), Authorize]
    public async Task<ActionResult<List<Result>>> GetResultsByRider()
    {
        return Ok();
    }


}