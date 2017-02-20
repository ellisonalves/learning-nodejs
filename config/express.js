var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var expressValidator = require('express-validator');

module.exports = function() {
    var app = express();
    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    app.use(bodyParser.urlencoded({extended : true}));
    app.use(methodOverride('_method'));
    app.use(bodyParser.json());
    app.use(expressValidator());

    // load the content inside routes, infra etc to the express object (app)
    // starting from the app folder
    load('routes', {cwd: 'app'})
        .then('infra')
    .into(app);

    return app;
}