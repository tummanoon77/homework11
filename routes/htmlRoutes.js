const path = require("path");


module.exports = function(app){

   // GET `/notes` - Should return the `notes.html` file. 
    app.get("/notes", function(req, res){
        // Send back notes.html file
        res.sendFile(path.join(__dirname,"/../public/notes.html"));
        }); 
    
    
   //  GET `*` - Should return the `index.html` file
    app.get("*", function(req, res){
            // Send back index.html file
        res.sendFile(path.join(__dirname,"/../public/index.html"));
            });
    }
