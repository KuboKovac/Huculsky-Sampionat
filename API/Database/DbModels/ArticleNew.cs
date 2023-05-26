using System.ComponentModel.DataAnnotations;

namespace API.Database.DbModels;

public class ArticleNew
{
    [Key]
    public int Id { get; set; }

    public string Username { get; set; }

    public DateTime Date { get; set; }
    public string Name { get; set; }
    public string Content { get; set; }

    public Boolean Approved { get; set; }
}