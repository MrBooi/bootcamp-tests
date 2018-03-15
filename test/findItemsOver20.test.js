describe('The findItemsOver20 function', function(){

it('should return all the products that have a quantity higher than 20', function(){

        assert.equal(findItemsOver20(itemList),2);

    });


    it('should return all the products that have a quantity higher than 20', function(){

            assert.equal(findItemsOver20(itemList1),1);

        });


        it('should return all the products that have a quantity higher than 20', function(){

                assert.notEqual(findItemsOver20(itemList1),2,"output is not the same with what is expected");

            });

            it('should return all the products that have a quantity higher than 20', function(){

                    assert.notEqual(findItemsOver20(itemList),1,"output is not the same with what is expected");

                });
});
