var express = require('express');
var path = require('path');

var site = express();

site.use('/', express.static(path.resolve(__dirname, 'dist')));

site.listen(80, function () {
  console.log('site served on port :80');
})

//serve api

var api = require('./api/index');
var router = require('./api/router');

api.use('/api', router);
api.listen(8888);
console.log("api started on port :8888");

module.exports = api;


//ssl
/*
var http = require('http');
var https = require('https');
var fs = require('fs');

var options = {
     key: fs.readFileSync('/etc/letsencrypt/live/ytradio.xyz/privkey.pem'),
     cert: fs.readFileSync('/etc/letsencrypt/live/ytradio.xyz/fullchain.pem'),
     ca: fs.readFileSync('/etc/letsencrypt/live/ytradio.xyz/chain.pem')
}

var server = https.createServer(options, site);
*/



// this http redirect works
/*
var redirectApp = express () ,
redirectServer = http.createServer(redirectApp);

redirectApp.use(function requireHTTPS(req, res, next) {
  if (!req.secure) {
    console.log("redirect 80 to ssl : " + req.url);
    //console.log("code = " + req.query.code);
    //return res.redirect('https://' + req.headers.host + req.url);
    res.redirect('https://yoursitehere.xyz'+ req.url);
  }
  next();
})

redirectServer.listen(80);

*/





// serve site
/*
site.use('/', express.static(path.resolve(__dirname, 'dist')));

server.listen(443, function () {
  console.log('site served on port :80');
})
*/
