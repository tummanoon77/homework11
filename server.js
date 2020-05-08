const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// GET `/notes` -  return the `notes.html` file. 
app.get("/notes", function(req, res){
    res.sendFile(path.join(__dirname + '/public/notes.html'));
});
// GET `/api/notes` -  read the `db.json` file and return all saved notes as JSON.
app.get("/api/notes", function(req, res) {
    let readNotes = fs.readFileSync("./db/db.json", "utf-8");
    notes = JSON.parse(readNotes);
    res.json(notes);
});
//  GET `*` -  return the `index.html` file
app.get("*", function(req, res){
    res.sendFile(path.join(__dirname + '/public/index.html'));
});
// POST `/api/notes` -  receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.
app.post("/api/notes", function(req, res){
    let note = req.body;
    let readNotes = fs.readFileSync("./db/db.json", "utf-8");
    let notes = JSON.parse(readNotes);
    notes.push(note);
    let writeNotes = JSON.stringify(notes);
    fs.writeFileSync("./db/db.json", writeNotes);
    res.json(notes);
});
//   DELETE `/api/notes/:id` -  receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.
app.delete("/api/notes/:id", function(req, res){
    let noteId = req.params.id;
    let readNotes = fs.readFileSync("./db/db.json", "utf-8");
    let notes = JSON.parse(readNotes);
    let deleteNote = notes.filter( (note) => note.id != noteId );
    let writeNotes = JSON.stringify(deleteNote);
    fs.writeFileSync("./db/db.json", writeNotes);
    res.json(notes);
});

app.listen(process.env.PORT || PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
