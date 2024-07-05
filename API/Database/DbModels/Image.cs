using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace API.Database.DbModels;

public class Image
{
    [Key]
    public int Id { get; set; }
    public string Url { get; set; }
    public DateTime DateOfCreation { get; set; }
    public string Category { get; set; }
    public bool Visible { get; set; }
}