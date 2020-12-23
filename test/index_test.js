//Construct a test suite
//1of12 import assert module
const assert = require('assert');
//2of12 import Rooster module
const Rooster = require('../index');

//3of12 create describe function for object

describe('Rooster', () => {
  describe('.announceDawn', () => {
    //5,6,7of 12 create test for rooster call on announceDawn
    it('returns a rooster call', () => {
      //Setup
      const expected = 'cock-a-doodle-doo!';

      //Exercise
      let actual = Rooster.announceDawn();

      //verify
      assert.strictEqual(actual, expected);
    });
  });
  //8 and 9of12 test timeAtDawn returns a string.
  describe('timeAtDawn', () => {
    it('returns its argument as a string', () => {
      //Setup
      const expected = 'string';

      //Exercise
      const actualType = typeof(Rooster.timeAtDawn(4));
      //verify
      assert.strictEqual(actualType, expected);
    });
    //11of12 create it block to test timeAtDawn < 0
    it('throws an error if passed a number less than 0', () => {
      //Setup
      const expectedError = RangeError;
      //Exercise
      const hour = -1;
      //verify
      assert.throws(
        () => {
           Rooster.timeAtDawn(hour);
        },
        expectedError
      );
    });
    //11of12 create it block to test timeAtDawn > 23
    it('throws an error if passed a number greater than 23', () => {
      //Setup
      const expectedError = RangeError;
      //Exercise
      const hour = 24;
      //verify
      assert.throws(
        () => {
           Rooster.timeAtDawn(hour);
        },
        expectedError
      );
    });
  });
});