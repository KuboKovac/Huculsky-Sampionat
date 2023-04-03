using System.ComponentModel.DataAnnotations;

namespace API.Database.DbModels;

public class Arbiter
{
    [Key]
    public int Id { get; set; }
    public string Name { get; set; }
    public string LastName { get; set; }
    public string Role { get; set; }
}