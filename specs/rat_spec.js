const Rat = require('../rat.js');
const Food = require('../food.js');
const assert = require('assert');

describe('Rat', function() {
  let rat;
  let food;
})

beforeEach(function() {
  rat = new Rat();
  food = new Food("ham and cheese sandwich", 3, false);
})

it('rat should be able to poison the food', function() {
  rat.poison(food);
  assert.strictEqual(food.poisoned, true);
})
