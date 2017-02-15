
var connectionFactory = require('../infra/connectionFactory');

module.exports = function(app) {

    app.get("/products", function(req,res) {

        var connection = connectionFactory();

        connection.query('select * from books', function(err, result) {
            if (err !== null)
                console.log("err: ", err);

            res.render('products/list', { "books" : result });
        });

        connection.end();
    });
}

