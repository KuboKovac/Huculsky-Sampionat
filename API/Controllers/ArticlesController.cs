using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;


// Controller for Articles and Articles comments


[ApiController]
[Route("[controller]")]
public class ArticlesController : ControllerBase
{
    [HttpGet("GetAllArticles")]
    public async Task<ActionResult> GetAllArticles()
    {
        return Ok("TODO");
    }
}