const path = require("path");
const fs = require("fs");


module.exports = function(app){


 // GET `/api/notes` -  read the `db.json` file and return all saved notes as JSON.
    app.get("/api/notes", (req, res) => {
        let readNotes = fs.readFileSync("/../db/db.json", "utf-8");
        notes = JSON.parse(readNotes);
        res.json(notes);
    });   

// POST `/api/notes` -  receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.
    app.post("/api/notes", (req, res) => {
        let note = req.body;
        let readNotes = fs.readFileSync("./db/db.json", "utf-8");
        let notes = JSON.parse(readNotes);
        notes.push(note);
        let writeNotes = JSON.stringify(notes);
        fs.writeFileSync("./db/db.json", writeNotes);
        res.json(notes);
    });

 //   DELETE `/api/notes/:id` -  receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.
    app.delete("/api/notes/:id", (req, res) => {
        let noteId = req.params.id;
        let readNotes = fs.readFileSync("./db/db.json", "utf-8");
        let notes = JSON.parse(readNotes);
        let deleteNote = notes.filter( (note) => note.id != noteId );
        let writeNotes = JSON.stringify(deleteNote);
        fs.writeFileSync("./db/db.json", writeNotes);
        res.json(notes);
    });

}