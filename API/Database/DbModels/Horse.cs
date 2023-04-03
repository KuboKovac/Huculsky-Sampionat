using System.ComponentModel.DataAnnotations;

namespace API.Database.DbModels;

public class Horse
{
    [Key]
    public int Id { get; set; }
    public string Name { get; set; }
    public string Number { get; set; }
    public bool Male { get; set; }
    public int MotherId { get; set; }
    public int FatherId { get; set; }
    public List<Result> Results { get; set; }
    public List<Competition> Competitions { get; set; }
    public List<Image> Images { get; set; }
}