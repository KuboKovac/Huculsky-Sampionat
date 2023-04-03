using System.ComponentModel.DataAnnotations;

namespace API.Database.DbModels;

public class Article
{
    [Key]
    public int Id { get; set; }
    public DateTime Date { get; set; }
    public string Name { get; set; }
    public string Content { get; set; }
    public List<Comment> Comments { get; set; }
    public List<Image> Images { get; set; }
}