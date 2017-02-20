var mysql = require('mysql');

function createDBConnection() {
    return mysql.createConnection({
            "host" : "localhost",
            "user" : "root",
            "password" : "root",
            "database" : "learning_nodejs",
            
        });
}

// wrapper. So, the connection won't be created before it is necessary
module.exports = function() {
    return createDBConnection;
}