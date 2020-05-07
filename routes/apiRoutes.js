const notedata = require("../data/note-data.js");
const fs = require("fs");





module.exports = function(app){
    app.get("/api/notes", function(req, res){
        fs.readFile(__dirname + "./db/db.json", function(data) {
            
            res.json(data);
        });
    app.post("/api/notes", function(req,res){
            const newNote = req.body;
            const newText =req.body.name ;
            console.log(newNote);
          
            allNotes[newText] = newNote;
            res.json(allNotes)
          });

});
}