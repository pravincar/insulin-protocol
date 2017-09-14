require('dotenv').config();
var express = require('express');
var compression = require('compression');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');

var app = express();
// app.use(logger('dev'));
app.use(cookieParser());
app.use(compression());
app.use('/data', require('./routes/data'));


// Serve files in the dist directory as static files
app.use(express.static('dist'));

app.get('*',function(req, res){
    res.sendFile('index.html',{root:'dist'});
});

// catch 404 and forward to error handler
app.get(/(\.)+/,function(req, res, next) {
  var err = new Error('404: Please check server logs');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  console.log('express_error',err);
  // render the error page
  res.status(err.status || 500);
  res.send(err.status+': Not Found');
});

module.exports = app;
