describe('The totalPhoneBill function', function(){

    it('should calculate the total bill for the data provided.', function(){
     var store ='call, sms, call, sms, sms';
     var bill = "R7.45";
        assert.equal(bill,totalPhoneBill(store));
    });

});
