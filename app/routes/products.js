module.exports = function(app) {
    app.get("/products", function(req,res) {
        console.log('listando');
        res.render("products/list");
    });
}

