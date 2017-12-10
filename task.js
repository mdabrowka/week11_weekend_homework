const Task = function(difficultyLevel, urgencyLevel, reward, complete) {
  this.difficultyLevel = difficultyLevel;
  this.urgencyLevel = urgencyLevel;
  this.reward = reward;
  this.complete = complete;
}

Task.prototype.statusChange = function() {
  this.complete = true;
}



module.exports = Task;
