describe('The transportFee function', function(){

    it('should return the right price based on the shift you are working', function(){
  var shift = 'afternoon';
        assert.equal(transportFee(shift),'R10');
    });

});
