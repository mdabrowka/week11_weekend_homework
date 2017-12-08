const Food = require("../food.js")
const assert = require('assert')


describe("Food", function () {
  let food1;
})


beforeEach(function() {
  food1 = new Food("Eggs Benedict", 5);
});


it('food should have a name', function() {
  assert.strictEqual(food1.name, "Eggs Benedict")
})

it('food should have a replenishment value', function() {
  assert.strictEqual(food1.replenishmentValue, 5)
})
