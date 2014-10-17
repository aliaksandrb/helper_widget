module.exports = function() {
    var routes = {
        index: function(req, res) {
            res.send('Hello Hackathon!');
        }
    };

    return routes;
};
