var app = require('./config/express')();

require('./app/routes/products')(app);

app.listen(3000, function(){
    console.log("Server running...");
});