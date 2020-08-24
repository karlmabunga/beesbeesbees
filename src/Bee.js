var Bee = function() {
  Grub.call(this);
  // an age property that is set to 5
  this.age = 5;
  // a color property that is set to yellow
  // a food property that is inherited from grub
  this.color = 'yellow';
  // an eat method that is inherited from grub
  // a job property that is set to keep on growing
  this.job = 'keep on growing';
};

// Object.create from Grub
// call the Grub superclass
Bee.prototype = Object.create(Grub.prototype);
// set the prototype
Bee.prototype.constructor = Bee;
// set the constructor
