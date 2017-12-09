const Food = function(name, replenishmentValue, poisoned) {
  this.name = name;
  this.replenishmentValue = replenishmentValue;
  this.poisoned = false;
}

module.exports = Food;
