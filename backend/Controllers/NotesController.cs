using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using backend.Models;
namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NotesController : ControllerBase
    {

        private static List<Note> notes = new List<Note>();
        private static int count = 0;
        static NotesController() {
            Note note1 = new Note {
                Id = count++,
                Title = "Jan 10",
                Description = "Duruthu Full Moon Poya"
            };
            Note note2 = new Note
            {
                Id = count++,
                Title = "Jan 15",
                Description = "Tamil Thai Pongal Day"
            };

            notes.Add(note1);
            notes.Add(note2);
        }

        // GET api/notes
        [HttpGet]
        public IEnumerable<Note> Get()
        {
            return notes;
        }
        // GET api/notes/5
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            return Ok(notes.Where(note => note.Id == id).FirstOrDefault());
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Note note) {
            note.Id = count++;
            notes.Add(note);
            return CreatedAtAction("Get", new { id = note.Id }, note);
        }

        [HttpPut]
        public async Task<IActionResult> Put(int id, [FromBody] Note note) {
            Note found = notes.Where(n => n.Id == id).FirstOrDefault();
            found.Title = note.Title;
            found.Description = note.Description;
            return NoContent();

        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id) {
            notes.RemoveAll(n => n.Id == id);
            return NoContent();
        }

        [HttpGet]
        [Route("delete/{id}")]
        public async Task<IActionResult> DeleteNew(int id)
        {
            notes.RemoveAll(n => n.Id == id);
            return NoContent();
        }

        [HttpPost]
        [Route("put")]
        public async Task<IActionResult> PutNew(int id, [FromBody] Note note)
        {
            Note found = notes.Where(n => n.Id == id).FirstOrDefault();
            found.Title = note.Title;
            found.Description = note.Description;
            return NoContent();

        }

    }
}