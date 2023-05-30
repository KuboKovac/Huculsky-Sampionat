using API.Database.DbModels;
using API.DTOs.Horses;
using API.DTOs.Riders;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;


[ApiController]
[Route("[controller]")]
public class HorsesController : ControllerBase
{
    private readonly DatabaseDbContext _dbContext;
    public HorsesController(DatabaseDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    [HttpPut("AssingRidersToHorse"), Authorize(Roles = "Admin")]
    public async Task<ActionResult> AssignRidersToHorse(List<int> riders)
    {
        
        return Ok("");
    }


    [HttpGet("GetAllHorses"), Authorize]
    public async Task<ActionResult<List<HorseDTO>>> GetAllHorses()
    {
        var horses = await _dbContext.Horses.Select(horse => new HorseDTO
        {
            Name = horse.Name,
            DateOfBirth = horse.DateOfBirth,
            Male = horse.Male,
            Number = horse.Number,
            FatherId = horse.FatherId,
            MotherId = horse.MotherId
        }).ToListAsync();
        
        return Ok(horses);
    }

    [HttpGet("GetHorseById/{id:int}"), Authorize]
    public async Task<ActionResult<HorseDTO>> GetHorseById(int id)
    {
        var horse = await _dbContext.Horses.FindAsync(id);

        if (horse == null)
            return BadRequest("Kôň nebol nájdený!");

        HorseDTO horseDto = new HorseDTO();

        horseDto.Name = horse.Name;
        horseDto.DateOfBirth = horse.DateOfBirth;
        horseDto.Male = horse.Male;
        horseDto.Number = horse.Number;
        horseDto.FatherId = horse.FatherId;
        horseDto.MotherId = horse.MotherId;

        return Ok(horseDto);
    }

    [HttpPost("CreateNewHorse"), Authorize(Roles = "Admin")]
    public async Task<ActionResult> CreateNewHorse(HorseDTO horseDto)
    {
        var possibleDuplicate = await _dbContext.Horses.Where(horse => horse.Number == horseDto.Number)
            .FirstOrDefaultAsync();

        if (possibleDuplicate != null)
            return BadRequest("Kôň s rovnakým číslom už existuje!");
        
        Horse newHorse = new Horse();
        
        newHorse.Name = horseDto.Name;
        newHorse.Number = horseDto.Number;
        newHorse.Male = horseDto.Male;
        newHorse.FatherId = horseDto.FatherId;
        newHorse.MotherId = horseDto.MotherId;
        newHorse.DateOfBirth = horseDto.DateOfBirth;

        _dbContext.Horses.Add(newHorse);
        await _dbContext.SaveChangesAsync();

        return Ok("Kôň bol úspešne pridaný!");
    }

    [HttpPut("UpdateHorse/{id:int}"), Authorize(Roles = "Admin")]
    public async Task<ActionResult> UpdateHorse(int id, HorseDTO horseDto)
    {
        var horseToUpdate = await _dbContext.Horses.FindAsync(id);

        if (horseToUpdate == null)
            return BadRequest("Kôň nebol nájdený!");
        
        horseToUpdate.Name = horseDto.Name;
        horseToUpdate.Number = horseDto.Number;
        horseToUpdate.Male = horseDto.Male;
        horseToUpdate.FatherId = horseDto.FatherId;
        horseToUpdate.MotherId = horseDto.MotherId;
        horseToUpdate.DateOfBirth = horseDto.DateOfBirth;

        _dbContext.Horses.Update(horseToUpdate);
        await _dbContext.SaveChangesAsync();
        
        return Ok("Kôň bol úspešne upravený!");
    }

    [HttpDelete("DeleteHorse/{id:int}"), Authorize(Roles = "Admin")]
    public async Task<ActionResult> DeleteHorse(int id)
    {
        var horseToDelete = await _dbContext.Horses.FindAsync(id);

        if (horseToDelete == null)
            return BadRequest("Kôň so zadaním ID sa nenašiel!");

        _dbContext.Horses.Remove(horseToDelete);
        await _dbContext.SaveChangesAsync();

        return Ok("Kôň bol úspešne odstránený!");
        
    }
}