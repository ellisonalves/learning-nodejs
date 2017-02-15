var express = require('express');
var load = require('express-load');

module.exports = function() {
    var app = express();

    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    // load the content inside routes, infra etc to the express object (app)
    // starting from the app folder
    load('routes', {cwd: 'app'})
        .then('infra')
    .into(app);

    return app;
}