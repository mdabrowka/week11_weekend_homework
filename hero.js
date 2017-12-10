const Hero = function(name, health, favouriteFood, tasks) {
  this.name = name;
  this.health = health;
  this.favouriteFood = favouriteFood;
  this.tasks = [];
}


Hero.prototype.sayMyName = function() {
  return `My name is ${this.name}`
}

Hero.prototype.addTask = function(task) {
   this.tasks.push(task);
 }


Hero.prototype.eat = function(food) {
  let replenishment = food.replenishmentValue;
  if (food.poisoned === true) {
    this.health -= replenishment;
  }
  else if (this.favouriteFood === food.name) {
    this.health += (1.5 * replenishment);
  } else {
  this.health += replenishment;}
  console.log(this.health);
}

Hero.prototype.sortTasksByDifficulty = function() {
  this.tasks.sort(function (a, b) {
  return a.difficultyLevel - b.difficultyLevel});
}

Hero.prototype.sortTasksByUrgency = function() {
  this.tasks.sort(function (a, b) {
  return a.urgencyLevel - b.urgencyLevel});
}

Hero.prototype.viewTasksByStatus = function() {
  this.tasks.filter()
}



module.exports = Hero;
