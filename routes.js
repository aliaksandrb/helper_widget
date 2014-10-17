var fs = require('fs');

module.exports = function() {
    var routes = {
        index: function(req, res) {
            res.render('index');
        },
        get_widget: function(req, res) {
            fs.readFile("./public/javascripts/widget.js", function(error, data) {
                 if (error) {
                     res.writeHead(404, { "Content-type": "text/plain" });
                     res.end("Some problems on the HelperWidget");
                 } else {
                     res.writeHead(202, { "Content-type": "text/javascript" });
                     res.end(data + ';console.log(\'' + req.originalUrl + '\');');
                 }
             });
        }
    };

    return routes;
};
