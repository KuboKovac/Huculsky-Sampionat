using API.Database.DbModels;

namespace API;

public class DatabaseDbContext : DbContext
{
    public DatabaseDbContext(DbContextOptions<DatabaseDbContext> options) : base(options) { }
    
    // Add all DbSets here 
    // example :     public DbSet<User> Users => Set<User>(); User class is database table model

    public DbSet<Rider> Riders => Set<Rider>();
    public DbSet<Arbiter> Arbiter => Set<Arbiter>();
    public DbSet<Horse> Horses => Set<Horse>();
    public DbSet<Coach> Coaches => Set<Coach>();
    public DbSet<Competition> Competitions => Set<Competition>();
}