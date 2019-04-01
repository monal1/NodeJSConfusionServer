var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var passprotLocalMongoose = require("passport-local-mongoose");

// Define User Schema
var User = new Schema({
  firstname: {
    type: String,
    default: ""
  },
  lastname: {
    type: String,
    default: ""
  },
  admin: {
    type: Boolean,
    default: false
  }
});

User.plugin(passprotLocalMongoose);
module.exports = mongoose.model("User", User);
