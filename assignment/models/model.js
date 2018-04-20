var mongoose = require('mongoose');
//used in local machine
// var db = mongoose.connect('mongodb://localhost:27017/webdev');

//used in heroku
var db = mongoose.connect('mongodb://admin:admin@ds157097.mlab.com:57097/heroku_wl7dh3j7');

module.exports = db;
