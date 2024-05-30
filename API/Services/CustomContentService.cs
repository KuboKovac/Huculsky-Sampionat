using API.Database.DbModels;
using API.DTOs.CustomContent;

namespace API.Services;

public class CustomContentService
{
    
    private readonly DatabaseDbContext _dbContext;
    
    public CustomContentService(DatabaseDbContext dbContext)
    {
        _dbContext = dbContext;
    }


    public async Task CreateCustomContent(CustomContent content)
    {
        await _dbContext.CustomContents.AddAsync(content);
        await _dbContext.SaveChangesAsync();
    }
    

    public async Task<CustomContent?> GetContentById(string id)
    {
        var content = await _dbContext.CustomContents.FindAsync(id);
        return content;
    }

    public async Task<bool> UpdateCustomContent(string id, CustomContentUpdateDTO customContent)
    {
        var existingContent = await _dbContext.CustomContents.FindAsync(id);
        if (existingContent == null)
        {
            return false;
        }
        existingContent.CustomHTML = customContent.CustomHTML;
        await _dbContext.SaveChangesAsync();
        return true;
    }
    
    
}