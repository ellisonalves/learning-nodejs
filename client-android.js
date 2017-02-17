var http = require('http');

function processRequest(config) {
    return http.request(config, function (res) {
        console.log(res.statusCode);
        res.on('data', function (body) { 
            console.log("Body: " + body); });
        });
}

// execute the get request
var acceptJsonRequest = {
    hostname: 'localhost',
    port: 3000,
    path: '/products',
    method : 'get',
    headers: {
        'Accept': 'application/json'
    }
};
var getRequest = processRequest(acceptJsonRequest);
getRequest.end();

// execute the post request
var producesJsonRequest = {
    hostname: 'localhost',
    port: 3000,
    path: '/products',
    method : 'post',
    headers: {
        'Content-type':'application/json'
    }
};
var postRequest = processRequest(producesJsonRequest);
var product = {
    'title': 'new book title from client-android.js', 
    'description' : 'new descripion for this book',
    'price' : '33.3' 
};
postRequest.end(JSON.stringify(product));