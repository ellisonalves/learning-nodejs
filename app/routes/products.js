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
        res.render('products/form', {"errors" : {}, "book" : {}});
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

        req.assert('title', 'Title is required').notEmpty();
        req.assert('price', 'Price invalid format').isFloat();
        req.assert('description', 'Description is required').notEmpty();

        var  errors = req.validationErrors();
        if (errors) {
            res.format({
                html : function() {
                    res.status(400).render('products/form', { "errors" : errors, "book" : book} );
                },
                json : function() {
                    res.status(400).json(errors);
                }
            });
            return;
        }

        bookDao.save(book, function(error, results, fields) {
            if (error) throw error;
            res.format({
                html : function() {
                    res.redirect('/products');
                },
                json : function() {
                    res.json(book);
                }
            });
        });

        connection.end();
    });

}