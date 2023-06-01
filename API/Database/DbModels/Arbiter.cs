using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace API.Database.DbModels;

public class Arbiter
{
    [Key]
    public int Id { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    [JsonIgnore]
    public List<Competition> Competitions { get; set; }
}