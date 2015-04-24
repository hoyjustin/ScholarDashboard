var express = require('express');
var session = require('express-session');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var multer  = require('multer')
var request = require('request');

var index = require('./routes/index');
var dashboard = require('./routes/dashboard');
var logout = require('./routes/logout');
var heatmap = require('./routes/heatmap');
var publications = require('./routes/publications');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
    secret: "dashboardsecret",
    name: "dashboard",
    resave: false,
    saveUninitialized: false
}));
app.use(multer({
    inMemory: true,
    limits: {
        fieldNameSize: 256,
        files: 2,
        fileSize: 10000000
    }
}))
app.use(express.static(path.join(__dirname, 'public')));

// url routing
app.use('/', index);
app.use('/dashboard', dashboard);
app.use('/logout', logout);
app.use('/heatmap', heatmap);
app.use('/publications', publications);

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

var port = process.env.PORT || 3000;

var server = app.listen(port, function () {
    console.log('listening on http://localhost:%d', port);
});
