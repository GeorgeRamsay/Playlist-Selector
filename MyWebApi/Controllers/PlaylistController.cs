using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MyWebApi.Models;

namespace MyWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PlaylistController : ControllerBase
    {
        private readonly PlaylistContext _context;

        public PlaylistController(PlaylistContext context)
        {
            _context = context;
        }

        // GET: api/Playlist
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Playlist>>> GetPlaylists()
        {
          if (_context.Playlists == null)
          {
              return NotFound();
          }
            return await _context.Playlists.ToListAsync();
        }

        // GET: api/Playlist/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Playlist>> GetPlaylist(long id)
        {
          if (_context.Playlists == null)
          {
              return NotFound();
          }
            var playlist = await _context.Playlists.FindAsync(id);

            if (playlist == null)
            {
                return NotFound();
            }

            return playlist;
        }

        // PUT: api/Playlist/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPlaylist(long id, Playlist playlist)
        {
            if (id != playlist.Id)
            {
                return BadRequest();
            }

            _context.Entry(playlist).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PlaylistExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Playlist
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Playlist>> PostPlaylist(Playlist playlist)
        {
          if (_context.Playlists == null)
          {
              return Problem("Entity set 'PlaylistContext.Playlists'  is null.");
          }
            _context.Playlists.Add(playlist);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPlaylist", new { id = playlist.Id }, playlist);
        }

        // DELETE: api/Playlist/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePlaylist(long id)
        {
            if (_context.Playlists == null)
            {
                return NotFound();
            }
            var playlist = await _context.Playlists.FindAsync(id);
            if (playlist == null)
            {
                return NotFound();
            }

            _context.Playlists.Remove(playlist);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PlaylistExists(long id)
        {
            return (_context.Playlists?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
