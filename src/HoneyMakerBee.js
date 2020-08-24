var HoneyMakerBee = function() {
  //  a color property inherited from bee that is set to yellow
  //  a food property that is inherited from grub
  //  an eat method that is inherited from grub
  // call the Bee superclass
  Bee.call(this);
  //  an age property that is set to 10
  this.age = 10;
  //  a job property that is set to make honey
  this.job = 'make honey';
  //  a honeyPot property that is set to 0
  this.honeyPot = 0;
};

//  set the prototype
//  set the constructor
// set super class to be grub
HoneyMakerBee.prototype = Object.create(Bee.prototype);
// set prototype constructor to be HoneyMakerBee
HoneyMakerBee.prototype.constructor = HoneyMakerBee;


//  a makeHoney method that adds 1 to that honeyBee\'s honeyPot
HoneyMakerBee.prototype.makeHoney = function(){
  this.honeyPot++;
}
//  a giveHoney method that subtracts 1 from that honeyBee\'s honeyPot
HoneyMakerBee.prototype.giveHoney = function() {
  this.honeyPot--;
}