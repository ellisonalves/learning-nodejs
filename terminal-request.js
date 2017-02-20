var http = require('http');

function processRequest(config) {
    return http.request(config, function (res) {
        console.log(res.statusCode);
        res.on('data', function (body) { 
            console.log("Body: " + body); });
        });
}

// execute the get request
var acceptHtmlRequest = {
    hostname: 'localhost',
    port: 3000,
    path: '/products',
    method : 'get',
    headers: {
        'Accept': 'application/json'
    }
};
var getRequest = processRequest(acceptHtmlRequest);
getRequest.end();

// execute the post request

var producesJsonRequest = {
    hostname: 'localhost',
    port: 3000,
    path: '/products',
    method : 'post',
    headers: {
        'Accept' : 'application/json',
        'Content-type':'application/json'
    }
};

var postRequest = processRequest(producesJsonRequest);
var product = {
    
    'description' : 'new descripion for this book',
    'price' : '33.3' 
};
postRequest.end(JSON.stringify(product));