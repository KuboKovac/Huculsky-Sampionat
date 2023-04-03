using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace API.Database.DbModels;

public class Image
{
    [Key]
    public int Id { get; set; }
    public string Url { get; set; }
    [JsonIgnore]
    public List<Article> Articles { get; set; }
    [JsonIgnore]
    public List<Rider> Riders { get; set; }
    [JsonIgnore]
    public List<Horse> Horses { get; set; }
}