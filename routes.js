module.exports = function() {
    var routes = {
        index: function(req, res) {
            res.render('index');
        }
    };

    return routes;
};
