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
        
        var horse = await _dbContext.Horses.Where(horse => horse.Id == resultsDto.HorseID)
            .Include(r => r.Results)
            .FirstOrDefaultAsync();

        var competition = await _dbContext.Competitions.Where(comp => comp.Id == resultsDto.CompetitionID)
            .Include(result => result.Results)
            .FirstOrDefaultAsync();
        
        
        if (rider == null)
            return BadRequest("Jazdec sa nenašiel!");

        if (horse == null)
            return BadRequest("Kôň sa v databáze nenašiel!");

        if (competition == null)
            return BadRequest("Súťaž sa v databáze nenašla!");
        
        
        Result newResult = new Result();
        Obstacles newObstacles = new Obstacles();

        newObstacles.L = resultsDto.L;
        newObstacles.Z = resultsDto.Z;
        newObstacles.Koliska = resultsDto.Koliska;
        newObstacles.Plachta = resultsDto.Plachta;
        newObstacles.Stvorec = resultsDto.Stvorec;
        newObstacles.Cuvanie_Medzi_Kavaletami = resultsDto.Cuvanie_Medzi_Kavaletami;
        newObstacles.Lavicka_Vyssia = resultsDto.Lavicka_Vyssia;
        newObstacles.Mostik_Najazdova_Rampa = resultsDto.Mostik_Najazdova_Rampa;
        newObstacles.Slalom = resultsDto.Slalom;
        newObstacles.Stuzky = resultsDto.Stuzky;
        newObstacles.Nizky_Podjazd = resultsDto.Nizky_Podjazd;
        newObstacles.Skok = resultsDto.Skok;
        newObstacles.Lano_Branicka = resultsDto.Lano_Branicka;
        newObstacles.Uzka_Ulicka_Zvonec = resultsDto.Uzka_Ulicka_Zvonec;
        newObstacles.Kosik_Preniest_Krcah = resultsDto.Kosik_Preniest_Krcah;
        newObstacles.Kavalety_4_ks = resultsDto.Kavalety_4_ks;
        newObstacles.Technicky_Prekrok = resultsDto.Technicky_Prekrok;
        newObstacles.Labyrint = resultsDto.Labyrint;
        newObstacles.Zastavenie_Cuvanie_Pri_Kuzelke = resultsDto.Zastavenie_Cuvanie_Pri_Kuzelke;
        newObstacles.Skok_50cm = resultsDto.Skok_50cm;
        newObstacles.Sud_Kavaleta = resultsDto.Sud_Kavaleta;
        newObstacles.Tah_Vreca = resultsDto.Tah_Vreca;
        newObstacles.Fit_Lopta = resultsDto.Fit_Lopta;
        newObstacles.Paleta_Statie = resultsDto.Paleta_Statie;

        _dbContext.Obstacles.Add(newObstacles);

        newResult.Time = resultsDto.Time;
        newResult.TotalPoints = resultsDto.TotalPoints;
        newResult.PointsAtObstacles = newObstacles;
        newResult.TimeLimit = resultsDto.TimeLimit;
        
        _dbContext.Results.Add(newResult);
        
        // Creates relation to other tables 
        rider.Results.Add(newResult);
        horse.Results.Add(newResult);
        competition.Results.Add(newResult);
        
        
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