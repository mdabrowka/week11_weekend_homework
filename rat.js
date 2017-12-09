const Rat = function() {

}


Rat.prototype.poison = function(food) {
  return food.poisoned = true;
}

module.exports = Rat;
