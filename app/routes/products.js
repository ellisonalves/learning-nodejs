module.exports = function(app) {

    app.get("/products", function(req,res) {        
        new app.infra.Transaction(app, function(connection) { 
                var bookDao = new app.infra.BookDao(connection);
                bookDao.listBooks(function (err, result) {
                    if (err !== null)
                        console.log("err: ", err);

                    res.render('products/list', { "books": result });
                })
            }
        );
    });

    app.get('products/remove', function() {
        var connection = app.infra.connectionFactory();
        var bookDao = app.infra.bookDao;

        var book = bookDao.load(id, callback);
    });
}

