var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var ejsLayouts = require("express-ejs-layouts");

app.use(require('morgan')('dev'));
app.set("view engine", "ejs");
app.use(ejsLayouts);
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res) {
  res.render('home');
});

var server = app.listen(process.env.PORT || 3000);

module.exports = server;
