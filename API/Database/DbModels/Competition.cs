using System.ComponentModel.DataAnnotations;

namespace API.Database.DbModels;

public class Competition
{
    [Key]
    public int Id { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public string Date { get; set; }
    public List<Arbiter> Arbiters { get; set; }
    public List<Result> Results { get; set; }
    public List<Rider> Riders { get; set; }
    public List<Horse> Horses { get; set; }
}