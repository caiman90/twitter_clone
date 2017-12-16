/**
 * Created by rejhan on 15.12.2017.
 */
var app = require("express")();
var cors = require("cors");
var bodyParser = require("body-parser");

// parsing our requests
app.use(cors());
app.use(bodyParser.json());

app.listen(3000,function () {
   console.log("###########################");
   console.log("Server has been started");
   console.log("###########################");
})
