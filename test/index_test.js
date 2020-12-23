//Construct a test suite
//1of12 import assert module
const assert = require('assert');
const Rooster = require('../index');

describe('Rooster', () => {
  describe('.announceDawn', () => {
    it('returns a rooster call', () => {
      //Setup
      const expected = 'cock-a-doodle-doo!';

      //Exercise
      let actual = Rooster.announceDawn();

      //verify
      assert.strictEqual(actual, expected);
    });
  });
  describe('timeAtDawn', () => {

  });
});