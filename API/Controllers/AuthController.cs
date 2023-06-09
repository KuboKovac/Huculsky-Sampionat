using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using API.Database.DbModels;
using API.DTOs.Auth;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

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
       // Finds user in database - if it's not found, returns null
        var usr = await _dbContext.Users.Where(usr => usr.Username == loginDto.Username).FirstOrDefaultAsync();

        //User not found case:
        if (usr == null) 
            return BadRequest("Meno alebo heslo je nesprávne!");
        
        //Verifies password, if incorrect return bad request, else return JWT
        //Wrong password case:
        if (!VerifyHash(loginDto.Password, usr.PasswordHash, usr.PasswordSalt))
            return BadRequest("Meno alebo heslo je nesprávne!");
        
        var jwt = GenerateJwt(usr);
        return Ok(new TokenDTO{Jwt = jwt});
    }

    
    
    [HttpPost("Register"), Authorize(Roles = "Admin")]
    public async Task<ActionResult> Register(RegisterDTO registerDto)
    {
        //Creates hash and salt from given password
        HashPassword(registerDto.Password, out byte[] passwordHash, out byte[] passwordSalt);
        
        //checks for Database conflicts
        var dbUser = await _dbContext.Users.Where(usr => usr.Username == registerDto.Username).FirstOrDefaultAsync();
        if (dbUser != null)
        {
            return BadRequest("Použivateľ s rovnakým menom existuje!");
        }

        //If no conflicts were found, adds user into DB and return 200
        _dbContext.Users.Add(new User()
        {
            Username = registerDto.Username,
            PasswordHash = passwordHash,
            PasswordSalt = passwordSalt,
            Role = registerDto.Role
        });
        await _dbContext.SaveChangesAsync();
        
        return Ok("Registrácia použivateľa " + registerDto.Username + " so statusom " + registerDto.Role + " prebehla úspešne!");
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

    // method generating Jwt tokens, if for any reason database contain user with invalid role f.e
    // "aaa" or any other bullshit string, also null, Default role is set as "User"
    private string GenerateJwt(User user)
    {
        List<Claim> claims = new List<Claim>();
        claims.Add(new Claim(ClaimTypes.Name, user.Username));

        // Add new roles into this switch 
        switch (user.Role)
        {
            case "Admin":
                claims.Add(new Claim(ClaimTypes.Role,"Admin"));
                break;
            case "Editor":
                claims.Add(new Claim(ClaimTypes.Role,"Editor"));
                break;
            case "Arbiter":
                claims.Add(new Claim(ClaimTypes.Role,"Arbiter"));
                break;
            default:
                claims.Add(new Claim(ClaimTypes.Role,"User"));
                break;
        }
        var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(
            _configuration.GetSection("AppSettings:Token").Value ?? throw new InvalidOperationException()));
        var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);
        
        var token = new JwtSecurityToken(
            claims: claims,
            expires: DateTime.Now.AddHours(8),
            signingCredentials: credentials
        );
        var jwt = new JwtSecurityTokenHandler().WriteToken(token);

        return jwt;
    }
}