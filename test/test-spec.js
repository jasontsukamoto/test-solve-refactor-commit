var chai = require('chai');
var should = chai.should();
var squareRoot = require('../js/solve-refactor-commit.js');

describe('sqrt', function () {

  it('should be a function', function () {
    squareRoot.sqrt.should.be.a('function');
  });

  it('sum should be a number', function () {
    squareRoot.sqrt(1).should.be.a('number');
  });

  it('square root of 100 should equal', function () {
    squareRoot.sqrt(100).should.be.equal(671.4629471031477);
  });

  it('should return false if a string is passed in', function () {
    squareRoot.sqrt('hello').should.equal(false);
  });
});