// Use this file to store authentication strategies
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var User = require("./models/user");

//Configure passort with new local strategy
exports.local = passport.use(new LocalStrategy(User.authenticate()));
// Below is for session support
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
