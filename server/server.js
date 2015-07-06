var express = require('express');
var partials = require('express-partials');
var bodyParser = require('body-parser');
var path = require('path');
var sessionAuth = require('./routes/auth');
var tasksAPI = require('./routes/tasks');
var reviewsAPI = require('./routes/reviews');

var app = express();

// Uncomment this block to clear all users from the
// Users collection, then add 10 randomly generated users.
// ----------------------------------------------
var dbUtils = require('../utils/db-utils.js');

dbUtils.dropCollection('User');
dbUtils.populateCollection('User', 10);
setTimeout(function() {
  dbUtils.dropCollection('Task');
  dbUtils.populateCollection('Task', 5);
}, 1000);

app.set('views', path.join(__dirname, "views"));
app.set('view engine', 'ejs');
app.use(partials());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//authentication middle-ware
sessionAuth(app);

tasksAPI(app, express);

reviewsAPI(app, express);

//static content
app.use(express.static(path.join(__dirname, "../client")));

//angular SPA
app.get('/', function(req, res) {
  res.render('index');
});

module.exports = app;

app.listen(process.env.PORT || 8000);

console.log('server listening...');
