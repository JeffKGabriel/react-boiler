var express = require('express');

var api = express();
var bodyParser = require('body-parser');

api.use(bodyParser.urlencoded({ extended: true }));
api.use(bodyParser.json());


var mongoose   = require('mongoose');
mongoose.Promise = global.Promise;




// *** config file *** //
var config = require('./config');

// *** mongoose *** ///
/*
mongoose.connect(config.mongoURI[api.settings.env], function(err, res) {
  if(err) {
    console.log('Error connecting to the database. ' + err);
  } else {
    console.log('Connected to Database: ' + config.mongoURI[api.settings.env]);
  }
});
*/



module.exports = api;
