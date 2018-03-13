describe('The findItemsOver function', function(){

    it('should return products that have quantity higher than the threshold', function(){
      var itemList = [
          {name : 'pears', qty : 37},
          {name : 'bananas', qty : 27},
          {name : 'apples', qty : 3},
      ];
       var threshold =30;
    
        assert.equal(findItemsOver(itemList, threshold), [{"name":"apples","qty":37}]));
    });

});
