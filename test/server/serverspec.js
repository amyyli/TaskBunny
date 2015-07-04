var request = require('supertest');
var express = require('express');
var expect = require('chai').expect;
var app = require('../../server/server.js');

var db = require('../../server/db/');

describe('', function () {
  beforeEach(function (done) {
    request(app)
      .get('/logout')
      .end(function(err, res) {

        done();
      });
  });

  describe('logging in', function () {
    it('should respond with 302 and redirect to "/auth/google" on /login', function (done) {
      request(app)
        .get('/login')
        .expect(302)
        .expect(function(res){
          var redirect = res.headers.location;
          expect(redirect).to.equal('/auth/google');
        })
        .end(done);
    });
  });

  describe('logging out', function () {
    it('request to should respond with 302 and redirect to "/" on /logout', function (done) {
      request(app)
        .get('/logout')
        .expect(302)
        .expect(function(res){
          var redirect = res.headers.location;
          expect(redirect).to.equal('/');
        })
        .end(done);
    });


  });

});