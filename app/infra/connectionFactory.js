// wrapper. So, the connection won't be created before it is necessary
module.exports = function() {

    if (!process.env.NODE_ENV) {
        return function() {
                    var mysql = require('mysql');

                    return mysql.createConnection({
                        "host" : "localhost",
                        "user" : "root",
                        "password" : "root",
                        "database" : "learning_nodejs",    
                })
        };
    }

    if (process.env.NODE_ENV == 'test') {
        return function() {
                    var mysql = require('mysql');

                    return mysql.createConnection({
                        "host" : "localhost",
                        "user" : "root",
                        "password" : "root",
                        "database" : "learning_nodejs_test",    
                })
        };
    }

}