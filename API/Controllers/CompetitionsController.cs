using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;


// Controller for Competitions and Competitions Results


[ApiController]
[Route("[controller]")]
public class CompetitionsController : ControllerBase
{
    [HttpGet("GetAllCompetitions")]
    public async Task<ActionResult> GetAllCompetitions()
    {
        return Ok("TODO");
    }
}