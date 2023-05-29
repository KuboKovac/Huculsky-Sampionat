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

    [HttpGet("GetAllHorses")]
    public async Task<ActionResult> GetAllHorses()
    {
        return Ok("");
    }

}