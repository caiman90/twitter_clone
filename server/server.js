/**
 * Created by rejhan on 15.12.2017.
 */
var app = require("express")();
var cors = require("cors");
var bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());

// **** Starting db *****
require('./models/DB')();
// **** REST API for TWEETS *****
require('./routes/tweetRoutes')(app);

app.listen(3000,function () {
   console.log("###########################");
   console.log("Server has been started");
   console.log("###########################");
});
