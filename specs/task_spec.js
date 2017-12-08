const Task = require('../task.js')
const assert = require('assert')


describe('Task', function() {
  let brushTeeth;
});


beforeEach(function() {
  brushTeeth = new Task(2, 3, "breakfast", "not started");
})


it('task should have a difficulty level', function() {
  assert.strictEqual(brushTeeth.difficultyLevel, 2);
})

it('task should have an urgency level', function() {
  assert.strictEqual(brushTeeth.urgencyLevel, 3);
})

it('task should have a reward ', function() {
  assert.strictEqual(brushTeeth.reward, "breakfast");
})

it('task should have a status', function() {
  assert.strictEqual(brushTeeth.status, "not started");
})

it('task should be able to change status', function() {
  brushTeeth.statusChange("completed");
  assert.strictEqual(brushTeeth.status, "completed" );
})
