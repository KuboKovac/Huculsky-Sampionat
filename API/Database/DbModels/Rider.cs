using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;


namespace API.Database.DbModels;

public class Rider
{
    [Key]
    public int Id { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string RiderNumber { get; set; }
    public string Category { get; set; }
    public string DateOfBirth { get; set; }
    [JsonIgnore]
    public List<Result> Results { get; set; }
    public List<Competition> Competitions { get; set; }
    public List<Image> Images { get; set; }
}