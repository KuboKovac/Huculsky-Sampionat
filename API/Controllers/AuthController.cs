using System.Security.Cryptography;
using API.DTOs.Auth;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;


// Controller responsible for Authorization and accounts management


[ApiController]
[Route("[controller]")]
public class AuthController : ControllerBase
{
    private readonly IConfiguration _configuration;
    private readonly DatabaseDbContext _dbContext;

    public AuthController(IConfiguration configuration, DatabaseDbContext dbContext)
    {
        _configuration = configuration;
        _dbContext = dbContext;
    }

    [HttpPost("Login")]
    public async Task<ActionResult<TokenDTO>> Login(LoginDTO loginDto)
    {
        return Ok("TODO");
    }

    [HttpPost("Register")]
    public async Task<ActionResult> Register(RegisterDTO registerDto)
    {
        return Ok("TODO");
    }


    private void HashPassword(string password, out byte[] passwordHash, out byte[] passwordSalt)
    {
        using (var hmac = new HMACSHA512())
        {
            passwordSalt = hmac.Key;
            passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
        }
    }
    private bool VerifyHash(string password, byte[] passwordHash, byte[] passwordSalt)
    {
        using (var hmac = new HMACSHA512(passwordSalt))
        {
            var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            return computedHash.SequenceEqual(passwordHash);
        }
    }
    
}