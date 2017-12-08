const Hero = require('../hero.js')
const assert = require('assert')


describe('Hero', function() {
  let hero;
});

beforeEach(function() {
  hero = new Hero("SuperWoman", 70, "pizza", []);
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
