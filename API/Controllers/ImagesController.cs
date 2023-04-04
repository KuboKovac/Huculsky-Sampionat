using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;


// Controller for Adding/Removing Images


[ApiController]
[Route("[controller]")]
public class ImagesController : ControllerBase
{
    [HttpGet("GetAllImages")]
    public async Task<ActionResult> GetAllImages()
    {
        return Ok("TODO");
    }
}