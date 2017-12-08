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

it('hero should be able to say her name', function() {
  assert.strictEqual(hero.sayMyName(), "My name is SuperWoman");
})

it('task array starts empty', function() {
  assert.strictEqual(hero.tasks.length, 0);
})
