(function () {
   'use strict';
}());

describe('Land', function(){
  var airport;
  var plane;

  beforeEach(function(){
    airport = new Airport();
    plane = new Plane();
    spyOn(Math, 'random').and.returnValue(0);
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
    spyOn(Math, 'random').and.returnValue(0);
  });

  it('the plane should take off from airport', function(){
    airport.land(plane);
    expect(airport.takeOff(plane)).toEqual('Plane has taken off!');
  });

  it('blocks take off when weather is stormy', function(){
    airport.land(plane);
    spyOn(airport._weather, 'isStormy').and.returnValue(true);
    expect(function() { airport.takeOff(plane); }).toThrowError('Plane cannot take off, weather is stormy.');
    expect(airport.hanger).toContain(plane);
  });

});
