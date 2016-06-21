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
