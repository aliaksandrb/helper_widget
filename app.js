var express = require('express'),
    app = express(),
    morgan = require('morgan'),
    routes = require('./routes')();

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', routes.index);
app.get('/get_widget', routes.get_widget);

var server = app.listen(3000, function() {
    console.log('-----Listening on port %d', server.address().port);
});
