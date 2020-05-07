const path = require("path");


module.exports = function(app){

    app.get("/notes", function(req, res){
        // Send back index.html file
        res.sendFile(path.join(__dirname,"/../public/notes.html"));
        }); 
    app.get("*", function(req, res){
            // Send back index.html file
        res.sendFile(path.join(__dirname,"/../public/index.html"));
            });


    }