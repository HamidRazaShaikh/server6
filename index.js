var express = require("express");
var cors = require("cors");
var mongoose = require("mongoose");
var connection = mongoose.connect("mongodb+srv://hamid:hamid@hamid-yq7y8.mongodb.net/test?retryWrites=true&w=majority");

var bodyParser = require("body-parser");
var app = express();
var user = require(user ,'./routes/user');

app.use(cors());
app.use(bodyParser.json({limit: '5000kb'}));
app.use(bodyParser.urlencoded({extended: false}));
app.use("./user", user);






app.set('port', process.env.PORT || 5000);
var server = app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + server.address().port);
});
