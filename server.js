const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 8080 ;
const fs = require("fs");


app.use(express.urlencoded({ extened: true}));
app.use(express.json());
app.use (express.static('public'));

require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);

app.listen(process.env.PORT || PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });