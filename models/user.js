var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var passprotLocalMongoose = require("passport-local-mongoose");

// Define User Schema
var User = new Schema({
  admin: {
    type: Boolean,
    default: false
  }
});

User.plugin(passprotLocalMongoose);
module.exports = mongoose.model("User", User);
