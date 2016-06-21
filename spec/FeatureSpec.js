(function () {
   'use strict';
}());

describe('Land', function(){
  var airport;
  var plane;

  beforeEach(function(){
    airport = new Airport();
    plane = new Plane();
  });

  it('the plane should land at airport', function(){
    expect(airport.land(plane)).toEqual('Plane has landed!');
  });

});

describe('Take Off', function(){
  var airport;
  var plane;

  beforeEach(function(){
    airport = new Airport();
    plane = new Plane();
  });

  it('the plane should take off from airport', function(){
    airport.land(plane);
    expect(airport.takeOff(plane)).toEqual('Plane has taken off!');
  });

});
