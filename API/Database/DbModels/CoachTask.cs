using System.ComponentModel.DataAnnotations;

namespace API.Database.DbModels;

public class CoachTask
{
    [Key]
    public int Id { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public int Rating { get; set; }
}