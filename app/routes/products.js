module.exports = function(app) {

    app.get("/products", function(req,res) {
        var connection = app.infra.connectionFactory();
        var bookDao = new app.infra.BookDao(connection);

        bookDao.list(function(error, results) {
            if (error) throw error;
            res.format({
                html : function() {
                    res.render('products/list', { "books" : results });
                },
                json : function() {
                    res.json(results);
                }
            });
        });

        connection.end();
    });

    app.get("/products/form", function(req, res) {
        res.render('products/form');
    });

    app.delete("/product/:id", function(req, res) {
        var connection = app.infra.connectionFactory();
        var bookDao = new app.infra.BookDao(connection);

        bookDao.remove(req.params, function(error, results, fields) {
            if (error) throw error;
            res.redirect('/products');
        });

        connection.end();
    });

    app.post("/products", function(req, res) {
        var connection = app.infra.connectionFactory();
        var bookDao = new app.infra.BookDao(connection);

        var book = req.body;
        console.log("book: ", book);

        bookDao.save(book, function(error, results, fields) {
            console.log(error);
            if (error) throw error;
            res.redirect('/products');
        });

        connection.end();
    });

}

