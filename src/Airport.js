(function () {
   'use strict';
}());

function Airport(){
  this.hanger = [];
}

Airport.prototype.land = function(plane){
  this.hanger.push(plane);
  return 'Plane has landed!';
};


Airport.prototype.takeOff = function(plane){
  this.hanger.pop(plane);
  return 'Plane has taken off!';
};
