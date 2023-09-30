using Microsoft.EntityFrameworkCore;

namespace MyWebApi.Models
{
    public class SongContext : DbContext
    {
        public SongContext(DbContextOptions<SongContext> options)
            : base(options)
        {
        }

        public DbSet<Song> Songs { get; set; }
    }
}