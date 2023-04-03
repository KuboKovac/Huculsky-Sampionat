using System.ComponentModel.DataAnnotations;

namespace API.Database.DbModels;

public class Result
{
    [Key]
    public int Id { get; set; }
    public int StartingNumber { get; set; }
    public string Time { get; set; }
    public string PointsAtObstacles { get; set; }
    public int TotalPoints { get; set; }

}