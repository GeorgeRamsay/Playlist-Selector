using Microsoft.EntityFrameworkCore;

namespace MyWebApi.Models
{
    public class UserContext : DbContext
    {
        public UserContext(DbContextOptions<UserContext> options)
            : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Playlist> Playlists { get; set; }

    }
}