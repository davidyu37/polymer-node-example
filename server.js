// var express = require('express');
// var path = require('path');
// // var favicon = require('serve-favicon');
// var logger = require('morgan');
// // var cookieParser = require('cookie-parser');
// var bodyParser = require('body-parser');

// var routes = require('./routes/index');

// var app = express();

// var PORT = process.env.PORT || 9000;

// // app.set('views', path.join(__dirname, 'views'));
// // app.set('view engine', 'ejs');

// // app.use(favicon(__dirname + '/public/favicon.ico'));
// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
// // app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'build/bundled')));

// app.use('/', routes);

// /// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//     var err = new Error('Not Found');
//     err.status = 404;
//     next(err);
// });

// /// error handlers

// // development error handler
// // will print stacktrace
// if (app.get('env') === 'development') {
//     app.use(function(err, req, res, next) {
//         res.status(err.status || 500);
//         res.render('error', {
//             message: err.message,
//             error: err
//         });
//     });
// }

// // production error handler
// // no stacktraces leaked to user
// app.use(function(err, req, res, next) {
//     res.status(err.status || 500);
//     res.render('error', {
//         message: err.message,
//         error: {}
//     });
// });

// var server = require('http').createServer(app);

// // Log: when server start smoothly/badly
// server.listen(PORT, function() {
//     console.log(`Listening on port ${PORT}`)
// });

// server.on('error', function(err) {
//     console.error(err)
// });


// module.exports = app;

var express = require('express');
var app = express();
var http = require('http').Server(app);

console.log(__dirname + '/build/bundled/index.html');

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/build/bundled/index.html');
});

app.use("/bower_components", express.static(__dirname + "/build/bundled/bower_components"));



http.listen(3000, function() {
    console.log('listening on *:3000');
});
