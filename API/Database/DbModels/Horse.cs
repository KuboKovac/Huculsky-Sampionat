namespace API.Database.DbModels;

public class Horse
{
    public int Id { get; set; }
    public string? Name { get; set; }
    public string? Number { get; set; }
    public string? Gender { get; set; }
    public int MotherId { get; set; }
    public int FatherId { get; set; }
}