const Task = function(difficultyLevel, urgencyLevel, reward, status) {
  this.difficultyLevel = difficultyLevel;
  this.urgencyLevel = urgencyLevel;
  this.reward = reward;
  this.status = status;
}

Task.prototype.statusChange = function(statusChange) {
  this.status = statusChange;
}



module.exports = Task;
