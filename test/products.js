var express = require('../config/express')();
var supertest = require('supertest')(express);

describe('#ProductController', function() {

    beforeEach(function(done) {
        var conn = express.infra.connectionFactory();
        conn.query("delete from books", function(err, results) {
            if(err) throw err;
            done();
        });
    });

    it('should get /products', function(done) {
        supertest.get('/products')
            .set('Accept', 'application/json')
            .expect('Content-type', /json/)
            .expect(200, done);
    });

    it('shouldnt perform post /products with invalid data', function(done) {
        supertest.post('/products')
            .send({
                'title' : '', 
                'description' : 'new book',
                'price' : '11.2'
            }).expect(400, done);
    });

    it('should perform post /products with valid data', function(done) {
        supertest.post('/products')
            .send({
                'title' : 'new title', 
                'description' : 'new book', 
                'price' : '10.2'
            }).expect(302, done);
    });

});