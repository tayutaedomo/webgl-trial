var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.get('/webgl/triangle', function(req, res) {
  res.render('webgl/triangle');
});

app.get('/threejs/cube', function(req, res) {
  res.render('threejs/cube');
});
app.get('/threejs/cube_rotate', function(req, res) {
  res.render('threejs/cube_rotate');
});
app.get('/threejs/cube_orbit', function(req, res) {
  res.render('threejs/cube_orbit');
});
app.get('/threejs/lookat', function(req, res) {
  res.render('threejs/lookat');
});
app.get('/threejs/lookat_2', function(req, res) {
  res.render('threejs/lookat_2');
});
app.get('/threejs/css3d', function(req, res) {
  res.render('threejs/css3d');
});


app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
