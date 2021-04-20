var assert = require('chai').assert;
var quantity = require('../Src/QuantityMeasurement')

describe('Quantity Measurement for lenght', () => {

  var length;
  before(function () {
    length = new quantity();
  });

  it('Given yard and feet when 3 feet and 1 yard should return equal', () => {
    assert.equal(length.yard(1), length.feet(3));
  });

  it('Given feet and yard when 1 feet and 1 yard should return notequal', () => {
    assert.notEqual(length.yard(1), length.feet(1));
  });

  it('Given inch and yard when 1 inch and 1 yard should return notequal', () => {
    assert.notEqual(length.yard(1), length.inch(1));
  });

  it('Given 36 inch and 1 yard should return equal', () => {
    assert.equal(length.yard(1), length.inch(36));
  });

  it('Given inch and centimeter when 2 inch and 5 centimeter should return equal', () => {
    assert.equal(length.inch(2), length.centimeter(5));
  });

  it('Given inch and centimeter when 2 inch and 5 centimeter should return 4 inch', () => {
    assert.equal(length.addlength(length.inch(2), length.inch(2)),4);
  });

  it('Given inch and feet when 2 inch and 1 feet should return 14 inch', () => {
    assert.equal(length.addlength(length.inch(2), length.feet(1)),14);
  });

  it('Given feet when 2 feet and 1 feet should return 24 inch', () => {
    assert.equal(length.addlength(length.feet(1), length.feet(1)),24);
  });

  it('Given inch and centimeter when 2 inch and 2.5 centimeter should return 3 inch', () => {
    assert.equal(length.addlength(length.inch(2), length.centimeter(2.5)),3);
  });

  it('Given gallon and liter when 1 gallon and 3.78 liter should return equal', () => {
    assert.equal(length.gallon(1), length.liter(3.78));
  });

  it('Given milliliter and liter when 1000 milliliter and 1 liter should return equal', () => {
    assert.equal(length.milliliter(1000), length.liter(1));
  });

  it('Given gallon and liter when 1 gallon and 3.78 liter should return 7.57 liter', () => {
    assert.equal(length.addlength(length.gallon(1), length.liter(3.78)),7.56);
  });

  it('Given milliliter and liter when 1 liter and 1000 milliliter should return 2 liter', () => {
    assert.equal(length.addlength(length.liter(1), length.milliliter(1000)),2);
  });

  it('Given grams and kilograms when 1 kilogram and 1000 grams should return equal', () => {
    assert.equal(length.kilogram(1), length.grams(1000));
  });
  
  it('Given tonne and kilograms when 1000 kilogram and 1 tonne should return equal', () => {
    assert.equal(length.kilogram(1000), length.tonne(1));
  });
  
});