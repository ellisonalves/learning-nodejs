var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get("/products", function(req,res) {
    console.log('listando');
    res.render("products/list");
});

app.listen(3000, function(){
    console.log("Server running...");
});