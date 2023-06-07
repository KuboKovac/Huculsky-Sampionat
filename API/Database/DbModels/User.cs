using System.ComponentModel.DataAnnotations;
using System.Security.Cryptography;

namespace API.Database.DbModels;

public class User
{
    [Key]
    public int Id { get; set; }
    public string Username { get; set; }
    public byte[] PasswordHash { get; set; }
    public byte[] PasswordSalt { get; set; }
    public string Role { get; set; }


    public User() { }
    public User(string password)
    {
        HashPassword(password,out byte[] hash,out byte[] salt);
        PasswordHash = hash;
        PasswordSalt = salt;
    }
    private void HashPassword(string password, out byte[] passwordHash, out byte[] passwordSalt)
    {
        using (var hmac = new HMACSHA512())
        {
            passwordSalt = hmac.Key;
            passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
        }
    }
}