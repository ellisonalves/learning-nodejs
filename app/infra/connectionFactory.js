var mysql = require('mysql');

function createDBConnection() {
    return mysql.createConnection({
            "host" : "localhost",
            "user" : "root",
            "password" : "root",
            "database" : "learning_nodejs",
            "port" : "3311"
        });
}

// wrapper. So, the connection won't be created before it is necessary
module.exports = function() {
    return createDBConnection;
}