var ForagerBee = function() {
  // a color property inherited from bee that is set to yellow
  // a food property that is inherited from grub
  // an eat method that is inherited from grub
  // call the Bee superclass
  Bee.call(this);
  // an age property that is set to 10
  this.age = 10;
  // a job property that is set to find pollen
  this.job = 'find pollen';
  // a canFly property that is set true
  this.canFly = true;
  // a treasureChest property that is set to an empty array []
  this.treasureChest = [];
};

// set the prototype
ForagerBee.prototype = Object.create(Bee.prototype);
// set the constructor
ForagerBee.prototype.constructor = ForagerBee;
// a forage method that allows the bee to add a treasure to the treasureChest
ForagerBee.prototype.forage = function(value) {
  // add value to treasure chest
  this.treasureChest.push(value);
}