using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace MyWebApi.Models{

public class User{
    [Key]
    public long Id { get; set; }
    public string? Username { get; set; }
    public string? Password { get; set; }
    public string? jwt { get; set; }
    public List<Playlist> Playlists { get; set; } = new List<Playlist>();
}
}