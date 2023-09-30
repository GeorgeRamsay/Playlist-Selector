using System.ComponentModel.DataAnnotations;

namespace MyWebApi.Models
{
    public class Song
    {
        [Key]
        public int Id { get; set; }
    }
}
