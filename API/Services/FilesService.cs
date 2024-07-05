namespace API.Services;

public class FilesService
{
    private readonly DatabaseDbContext _dbContext;
    
    public FilesService(DatabaseDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task CreateImage()
    {
        
    }
    
    
}