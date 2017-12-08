const Hero = function(name, health, favouriteFood, tasks) {
  this.name = name;
  this.health = health;
  this.favouriteFood = favouriteFood;
  this.tasks = [];
}


Hero.prototype.sayMyName = function() {
  return `My name is ${this.name}`
}

Hero.prototype.eat = function(food) {
  this.health += food.replenishmentValue;
}

module.exports = Hero;
