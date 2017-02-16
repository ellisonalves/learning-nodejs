function BookDao(connection) {
    this._connection = connection;
}

BookDao.prototype.list = function(callback) {
    this._connection.query('select * from books', callback);
};

BookDao.prototype.save = function(book, callback) {
    this._connection.query('insert into books set ?', book, callback);
};

BookDao.prototype.remove = function(param, callback) {
    this._connection.query('delete from books where id = ?', param.id, callback);
};


module.exports = function() {
    return BookDao;
}