var assert = require('chai').assert;
var quantity = require('../Src/QuantityMeasurement')

describe('Quantity Measurement for lenght', () => {

  var length;
  before(function () {
    length = new quantity();
  });

  it('Given 3 feet and 1 yard should return equal', () => {
    assert.equal(length.yard(1), length.feet(3));
  });

  it('Given 1 feet and 1 yard should return notequal', () => {
    assert.notEqual(length.yard(1), length.feet(1));
  });

});