function Transaction(app, callback) {
    var connection = app.infra.connectionFactory();
    callback(connection);
    connection.end();
}

module.exports = function() {
    return Transaction;
}