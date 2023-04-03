using API.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;


// Controller responsible for Authorization and accounts management


[ApiController]
[Route("[controller]")]
public class AuthController : ControllerBase
{
    [HttpPost("Login")]
    public async Task<ActionResult<User>> Login()
    {
        return Ok("TODO");
    }

    [HttpPost("Register")]
    public async Task<ActionResult<User>> Register()
    {
        return Ok("TODO");
    }
}