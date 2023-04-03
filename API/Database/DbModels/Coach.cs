using System.ComponentModel.DataAnnotations;

namespace API.Database.DbModels;

public class Coach
{
    [Key]
    public int Id { get; set; }
    public string Name { get; set; }
    public string LastName { get; set; }
    public DateTime DateOfBirth { get; set; }
    public int RegistrationNumber { get; set; }
    public int Points { get; set; }
    public List<CoachTask> CoachTasks { get; set; }
}