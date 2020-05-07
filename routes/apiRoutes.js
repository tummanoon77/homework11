const notedata = require("../data/note-data.js");





module.exports = function(app){
    app.get("/api/notes", function(req, res){
        fs.readFile(__dirname + "./db/db.json", function(data) {
        res.save(data);
            
          });
});
}