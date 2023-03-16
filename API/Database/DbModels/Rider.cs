namespace API.Database.DbModels;

public class Rider
{
    public int Id { get; set; }
    public string? Name { get; set; }
    public string? LastName { get; set; }
    public string? Category { get; set; }
    public DateTime DateOfBirth { get; set; }
}