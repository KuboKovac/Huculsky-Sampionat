namespace API.Services;

public class WebRootService
{
    private readonly string imagesWwwPath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "images");
    
    public async Task<List<string>> StoreFilesAsync(IEnumerable<IFormFile>? files)
    {
        if (files == null || !files.Any())
        {
            throw new ArgumentException("No files provided.");
        }

        var relativePaths = new List<string>();

        foreach (var file in files)
        {
            if (file.Length == 0)
            {
                throw new ArgumentException("One or more files are empty.");
            }

            var relativePath = Path.Combine("images", file.FileName);
            var filePath = Path.Combine(imagesWwwPath, file.FileName);

            await using var stream = new FileStream(filePath, FileMode.Create);
            await file.CopyToAsync(stream);

            relativePaths.Add(relativePath);
        }

        return relativePaths;
    }
}