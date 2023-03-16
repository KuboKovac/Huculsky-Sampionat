namespace API.Database.DbModels;

public class Coach
{
    public int Id { get; set; }
    public string? Name { get; set; }
    public string? LastName { get; set; }
    public DateTime DateOfBirth { get; set; }
    public int RegistrationNumber { get; set; }
}