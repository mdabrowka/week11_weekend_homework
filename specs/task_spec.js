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

it('task should have an unrgency level', function() {
  assert.strictEqual(brushTeeth.urgencyLevel, 3);
})
