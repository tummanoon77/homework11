const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 8080 ;
const fs = require("fs");


app.use(express.urlencoded({ extened: true}));
app.use(express.json());
app.use (express.static('public'));



const notes =[];


app.post("/create", function(req,res){
  const newCharacter = req.body;
  const newCharName =req.body.name ;
  console.log(newCharacter);

  allCharacters[newCharName] = newCharacter;
  res.json({result:"success"});
});
require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });