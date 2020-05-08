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
}