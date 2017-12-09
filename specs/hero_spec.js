const Hero = require('../hero.js')
const Food = require('../food.js')
const Task = require('../task.js')
const assert = require('assert')


describe('Hero', function() {
  let hero;
  let baconRoll;
  let pizza;
  let walkDog;
  let goRunning;
  let finishHomework;
});

beforeEach(function() {
  hero = new Hero("SuperWoman", 70, "pizza", []);
  baconRoll = new Food("Bacon roll", 5);
  pizza = new Food("pizza", 2);
  walkDog = new Task(3, 8, "happy pup", "complete");
  goRunning = new Task(9, 1, "3 biscuits", "complete")
  finishHomework = new Task(7, 5, "gin", "incomplete");
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

it('hero should be able to add tasks to task array', function () {
  hero.addTask(walkDog);
  hero.addTask(goRunning);
  hero.addTask(finishHomework);
  assert.strictEqual(hero.tasks.length, 3);
})

it('hero should be able to eat and replenish health', function() {
  hero.eat(baconRoll);
  assert.strictEqual(hero.health, 75);
})

it('hero should be able to eat fave food and get more health', function() {
  hero.eat(pizza);
  assert.strictEqual(hero.health, 73);
})

it('hero should sort tasks by difficulty level', function() {
  hero.addTask(walkDog);
  hero.addTask(goRunning);
  hero.addTask(finishHomework);
  hero.sortTasksByDifficulty();
  const expected = [walkDog, finishHomework, goRunning];
  assert.deepStrictEqual(hero.tasks, expected)})

  it('hero should sort tasks by urgency level', function() {
    hero.addTask(walkDog);
    hero.addTask(goRunning);
    hero.addTask(finishHomework);
    hero.sortTasksByUrgency();
    const expected = [goRunning, finishHomework, walkDog,];
    assert.deepStrictEqual(hero.tasks, expected)})
