const Hero = require('../hero.js')
const Food = require('../food.js')
const assert = require('assert')


describe('Hero', function() {
  let hero;
  let baconRoll;
  let pizza;
});

beforeEach(function() {
  hero = new Hero("SuperWoman", 70, "pizza", []);
  baconRoll = new Food("Bacon roll", 5);
  pizza = new Food("pizza", 2);
});


it('hero should have a name', function() {
  assert.strictEqual(hero.name, "SuperWoman");
})

it('hero should have a health level', function() {
  assert.strictEqual(hero.health, 70);
})

it('hero should have a favourite food', function() {
  assert.strictEqual(hero.favouriteFood, "pizza");
})

it('hero should be able to say her name', function() {
  assert.strictEqual(hero.sayMyName(), "My name is SuperWoman");
})

it('task array starts empty', function() {
  assert.strictEqual(hero.tasks.length, 0);
})

it('hero should be able to eat and replenish health', function() {
  hero.eat(baconRoll);
  assert.strictEqual(hero.health, 75);
})

it('hero should be able to eat fave food and get more health', function() {
  hero.eat(pizza);
  assert.strictEqual(hero.health, 73);
})
