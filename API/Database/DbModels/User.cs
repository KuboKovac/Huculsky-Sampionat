using System.ComponentModel.DataAnnotations;

namespace API.Database.DbModels;

public class User
{
    [Key]
    public int Id { get; set; }
    public int Username { get; set; }
    public byte[] PasswordHash { get; set; }
    public byte[] PasswordSalt { get; set; }
    public string Role { get; set; }
}