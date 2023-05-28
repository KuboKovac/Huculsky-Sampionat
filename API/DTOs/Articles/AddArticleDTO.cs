namespace API.DTOs.Articles;

public class AddArticleDTO
{
    public string Name { get; set; }
    public string Content { get; set; }
    
    public string CreatedBy { get; set; }
}