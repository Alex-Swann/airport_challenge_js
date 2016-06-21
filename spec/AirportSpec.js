(function () {
   'use strict';
}());

describe('Airport', function(){
  var airport;
  var plane;

  beforeEach(function(){
    airport = new Airport();
    plane = jasmine.createSpyObj('plane',['']);
  });

  describe('checks for weather conditions', function() {
    it('should check for stormy conditions', function() {
      expect(airport._weather.isStormy()).toBeFalsy();
    });

    it('does not clear planes for take off when stormy', function() {
      spyOn(airport._weather, 'isStormy').and.returnValue(true);
      expect(function() { airport.takeOff(plane); } ).toThrowError('Plane cannot take off, weather is stormy.');
    });

    it('does not allow planes to land when stormy', function() {
      spyOn(airport._weather, 'isStormy').and.returnValue(true);
      expect(function() { airport.land(plane);} ).toThrowError('Plane cannot land, weather is stormy.');
    });
  });

  describe('#land', function(){
    it('should let a plane land',function(){
      expect(airport.land(plane)).toEqual('Plane has landed!');
    });
  });


  describe('#take_off', function(){
    it('should let a plane take off',function(){
      airport.land(plane);
      expect(airport.takeOff(plane)).toEqual('Plane has taken off!');
    });
  });

  describe('#hanger', function(){
    it('starts as an empty hanger',function(){
      expect( airport.hanger ).toEqual([]);
    });
    it('store planes',function(){
      airport.land(plane);
      expect( airport.hanger ).toEqual([plane]);
    });
  });
});
