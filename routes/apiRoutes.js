const path = require("path");


module.exports = function(app){


 //GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.
    app.get("/api/notes", (req, res) => {
        let readNotes = fs.readFileSync("/../db/db.json", "utf-8");
        notes = JSON.parse(readNotes);
        res.json(notes);
    });   



}