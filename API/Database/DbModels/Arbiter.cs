using System.ComponentModel.DataAnnotations;

namespace API.Database.DbModels;

public class Arbiter
{
    [Key]
    public int Id { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
}