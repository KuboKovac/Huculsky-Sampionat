using API.Database.DbModels;

namespace API;

public class DatabaseDbContext : DbContext
{
    public DatabaseDbContext(DbContextOptions<DatabaseDbContext> options) : base(options) { }
    
    // Add all DbSets (Database Tables) here 
    // example :     public DbSet<User> Users => Set<User>(); User class is database table model
    public DbSet<User> Users => Set<User>();
    public DbSet<Rider> Riders => Set<Rider>();
    public DbSet<Horse> Horses => Set<Horse>();
    public DbSet<Coach> Coaches => Set<Coach>();
    public DbSet<CoachTask> CoachTasks => Set<CoachTask>();
    public DbSet<Arbiter> Arbiter => Set<Arbiter>();
    public DbSet<Competition> Competitions => Set<Competition>();
    public DbSet<Result> Results => Set<Result>();
    public DbSet<Image> Images => Set<Image>();
    public DbSet<Comment> Comments => Set<Comment>();
    public DbSet<Article> Articles => Set<Article>();
}