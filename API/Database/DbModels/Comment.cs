using System.ComponentModel.DataAnnotations;

namespace API.Database.DbModels;

public class Comment
{
    [Key]
    public int Id { get; set; }
    public DateTime TimeStamp { get; set; }
    public string Content { get; set; }
}