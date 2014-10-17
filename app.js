var express = require('express'),
    app = express(),
    morgan = require('morgan'),
    routes = require('./routes')();

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.get('/', routes.index);

var server = app.listen(3000, function() {
    console.log('-----Listening on port %d', server.address().port);
});
