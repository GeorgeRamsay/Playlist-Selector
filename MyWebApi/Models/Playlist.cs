using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace MyWebApi.Models
{
    public class Playlist
    {
        [Key]
        public long Id { get; set; }
        public string Name { get; set; }
        public List<Song> Songs { get; set; } = new List<Song>();

        public long UserId { get; set; }
        public User User { get; set; }
    }
}
