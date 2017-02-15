function BookDao(connection) {
    this._connection = connection;
}

BookDao.prototype.listBooks = function(callback) {
    this._connection.query('select * from books', callback);
};

module.exports = function() {
    return BookDao;
}