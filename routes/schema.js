var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
    name: {type: String, required: true}

});

exports.UserModel = mongoose.model("User", UserSchema);