module.exports = function() {
    var routes = {
        index: function(req, res) {
            res.render('index');
        },
        get_widget: function(req, res) {
            res.send("document.querySelector('h1').innerHTML = 'WORKING';");
        }
    };

    return routes;
};
