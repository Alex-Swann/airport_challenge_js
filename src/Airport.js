(function () {
   'use strict';
}());

function Airport(weather){
  this._weather = typeof weather !== 'undefined' ? weather : new Weather();
  this.hanger = [];
}

Airport.prototype.land = function(plane){
  if (this._weather.isStormy()) {
    throw(new Error('Plane cannot land, weather is stormy.'));
  }
  this.hanger.push(plane);
  return 'Plane has landed!';
};


Airport.prototype.takeOff = function(plane){
  if (this._weather.isStormy()) {
    throw(new Error('Plane cannot take off, weather is stormy.'));
  }
  this.hanger.pop(plane);
  return 'Plane has taken off!';
};
