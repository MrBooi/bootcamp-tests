describe('The countRegNumber function', function(){

    it('should display the number registration in the list', function(){
      var str ='CA 182736,CY 523519,CJ 812328';
        assert.equal(countRegNumber(str),3);
    });

});
