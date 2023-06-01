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

    [HttpPut("AssingRidersToHorse/{id:int}"), Authorize(Roles = "Admin")]
    public async Task<ActionResult> AssignRidersToHorse(int id, RidersListDTO ridersListDto)
    {
        var horse = await _dbContext.Horses.FindAsync(id);
        
        if (horse == null)
            return BadRequest("Kôň sa nenašiel!");

        foreach (var Id in ridersListDto.RidersIds)
        {
            var rider = await _dbContext.Riders.Where(rider => rider.Id == Id)
                .Include(h => h.Horses)
                .FirstOrDefaultAsync();
            
            if (rider == null)
                return  BadRequest("Jazdec s ID " + Id + " nebol nájdený!");

            rider.Horses.Add(horse);
            _dbContext.Riders.Update(rider);
        }

        await _dbContext.SaveChangesAsync();
        return Ok("Kone boli úspešne priradené k jazdcom!");
    }

    [HttpPut("RemoveRidersFromHorse/{id:int}"), Authorize(Roles = "Admin")]
    public async Task<ActionResult> RemoveRidersFromHorse(int id, RidersListDTO ridersListDto)
    {
        var horse = await _dbContext.Horses.FindAsync(id);   

        if (horse == null)
            return BadRequest("Kôň sa nenašiel!");

        foreach (var Id in ridersListDto.RidersIds)
        {
            var rider = await _dbContext.Riders.Where(rider => rider.Id == Id)
                .Include(h => h.Horses)
                .FirstOrDefaultAsync();
            
            if (rider == null)
                return  BadRequest("Jazdec s ID " + Id + " nebol nájdený!");

            rider.Horses.Remove(horse);
            _dbContext.Riders.Update(rider);
        }

        await _dbContext.SaveChangesAsync();
        return Ok("Kone boli úspešne odstránené jazdcom!");
    }


    [HttpGet("GetAllHorses"), Authorize]
    public async Task<ActionResult<List<HorseDTO>>> GetAllHorses()
    {
        var horses = await _dbContext.Horses.Select(horse => new HorseDTO
        {
            Id = horse.Id,
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

    [HttpGet("GetHorseParents/{id:int}"), Authorize]
    public async Task<ActionResult<List<HorseDTO>>> GetHorseParents(int id)
    {
        var horse = await _dbContext.Horses.FindAsync(id);

        if (horse == null)
            return BadRequest("Kôň sa nenašiel v databáze!");

        var father = await _dbContext.Horses.FindAsync(horse.FatherId);
        var mother = await _dbContext.Horses.FindAsync(horse.MotherId);

        if (father == null && mother == null)
        {
            return Ok("Kôň nemá definovaných rodičov!");
        }

        List<HorseDTO> parents = new List<HorseDTO>();
        HorseDTO fatherDTO = new HorseDTO();
        HorseDTO motherDTO = new HorseDTO();
        
        if (father != null)
        {
            fatherDTO.Id = father.Id;
            fatherDTO.Name = father.Name;
            fatherDTO.DateOfBirth = father.DateOfBirth;
            fatherDTO.Male = father.Male;
            fatherDTO.Number = father.Number;
            fatherDTO.FatherId = father.FatherId;
            fatherDTO.MotherId = father.MotherId;
            
            parents.Add(fatherDTO);
        }
        if (mother != null)
        {
            motherDTO.Id = mother.Id;
            motherDTO.Name = mother.Name;
            motherDTO.DateOfBirth = mother.DateOfBirth;
            motherDTO.Male = mother.Male;
            motherDTO.Number = mother.Number;
            motherDTO.FatherId = mother.FatherId;
            motherDTO.MotherId = mother.MotherId;
            
            parents.Add(motherDTO);
        }

        return Ok(parents);
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