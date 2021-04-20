/*************************************************************
 *
 * Execution       : default node cmd> node QuantityMeasurement.js
 * Purpose         : Unit Measurement Conversion
 *
 * @description    : Convert and compare the lengths 
 *                   of different measurements. 
 *
 * @file           : QuantityMeasurement.js
 * @overview       : Compare, convert and add quantities
 * @module         : Node.js, Mocha and Chai and local packages
 *                   are added.
 * @version        : 1.0
 * @since          : 19/04/2021
 *
 * **********************************************************/

/**
 * @description Class QuantityMeasurement
 * @class QuantityMeasurement
 */
class QuantityMeasurement {

  feet = (value) => {
    return value * 12;
  };

  yard = (value) => {
    return value * 36
  };

  inch = (value) => {
    return value;
  };

  centimeter = (value) => {
    return value * 0.4;
  };

  addlength = (value1, value2) => {
     return value1 + value2;
  }

  gallon = (value) => {
    return value * 3.78
  }

  liter = (value) => {
    return value
  }
}
module.exports = QuantityMeasurement;