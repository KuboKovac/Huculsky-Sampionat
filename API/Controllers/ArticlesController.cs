using API.Database.DbModels;
using API.DTOs.Articles;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;


// Controller for Articles and Articles comments


[ApiController]
[Route("[controller]")]
public class ArticlesController : ControllerBase
{
    private readonly DatabaseDbContext _dbContext;

    public ArticlesController(DatabaseDbContext dbContext)
    {
        _dbContext = dbContext;
    }
    
    
    
    [HttpGet("GetAllArticles")]
    public async Task<ActionResult> GetAllArticles()
    {
        var articles = await _dbContext.Articles.Include(i => i.Images).ToListAsync();
        return Ok(articles);
    }

    [HttpPost("CreateArticle"), Authorize(Roles = "Admin")]
    public async Task<ActionResult> CreateArticle(AddArticleDTO articleDto)
    {
        Article article = new Article();
        
        article.IsApproved = false;
        article.Name = articleDto.Name;
        article.Content = articleDto.Content;
        article.Date = DateTime.Now;

        _dbContext.Articles.Add(article);

        await _dbContext.SaveChangesAsync();

        return (Ok("Článok bol vytvorený!"));
    }
}