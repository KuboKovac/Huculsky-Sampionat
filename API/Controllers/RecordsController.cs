using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;


// Controller for Riders, Horses, Coaches and Arbiters


[ApiController]
[Route("[controller]")]

public class RecordsController : ControllerBase
{
    [HttpGet("GetAllRiders")]
    public async Task<ActionResult> GetAllRiders()
    {
        return Ok("TODO");
    }
}