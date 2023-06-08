using API.Database.DbModels;

namespace API.Data;

public class DbInitializer
{

    public static void DbSeed(IApplicationBuilder builder)
    {
        using (var scope = builder.ApplicationServices.CreateScope())
        {
            var context = scope.ServiceProvider.GetService<DatabaseDbContext>();
                
            if (!context.Users.Any())
            {
                context.Users.Add(
                    new User("")
                    {
                        Username = "Administrator",
                        Role = "Admin"
                    }
                );
                context.SaveChanges();
            }
        }
    }
}