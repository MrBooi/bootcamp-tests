describe('isFromBellville function', function(){

    it('If registration startsWith CY Pass it should return true', function(){
        var reg = ("CY 123");
        assert.equal(isFromBellville(reg),true);
    });
    it('if registration does not startsWith CY it should return false ', function(){
        // this test will fail - can you fix it?
            var reg = ("CA 123");
        assert.equal(isFromBellville(reg),false);
    });
});
