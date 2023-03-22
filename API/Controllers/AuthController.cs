using API.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[ApiController]
[Route("[controller]")]
public class AuthController : ControllerBase
{
    [HttpPost("login")]
    public async Task<ActionResult<User>> Login()
    {
        return Ok("TODO");
    }

    [HttpPost("register")]
    public async Task<ActionResult<User>> Register()
    {
        return Ok("TODO");
    }
}