
module.exports = function(app) {

    app.get("/products", function(req,res) {

        var connection = app.infra.connectionFactory();

        var bookDao = app.infra.bookDao;

        bookDao.listBooks(connection, function(err, result) {
            if (err !== null)
                console.log("err: ", err);

            res.render('products/list', { "books" : result });
        });

        connection.end();
    });
}

