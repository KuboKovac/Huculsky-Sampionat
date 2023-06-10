using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace API.Database.DbModels;

public class Result
{
    [Key]
    public int Id { get; set; }
    [ForeignKey("Competitions")]
    public int CompetitionID { get; set; }
    [ForeignKey("Riders")]
    public int RiderId { get; set; }
    public string Time { get; set; }
    public string TimeLimit { get; set; }
    public Obstacles PointsAtObstacles { get; set; }
    public int TotalPoints { get; set; }
}