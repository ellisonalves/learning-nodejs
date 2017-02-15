var mysql = require('mysql');

module.exports = function(app) {

    app.get("/products", function(req,res) {
        var connection = mysql.createConnection({
            "host" : "localhost",
            "user" : "root",
            "password" : "root",
            "database" : "learning_nodejs",
            "port" : "3311"
        });

        connection.query('select * from books', function(err, result) {
            if (err !== null)
                console.log("err: ", err);

            res.render('products/list', { "books" : result });
        });

        connection.end();
    });
}

