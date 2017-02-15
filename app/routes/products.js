module.exports = function(app) {

    app.get("/products", function(req,res) {
        var connection = app.infra.connectionFactory();
        var bookDao = new app.infra.BookDao(connection);

        bookDao.listBooks(function(err, result) {
            if (err !== null)
                console.log("err: ", err);

            res.render('products/list', { "books" : result });
        });

        connection.end();
    });

    app.get('products/remove', function() {
        var connection = app.infra.connectionFactory();
        var bookDao = app.infra.bookDao;

        var book = bookDao.load(id, callback);
    });
}

