describe('The greet function', function(){

    it('should greet Andrew correctly', function(){
         assert.equal('Hello, Andrew', greet('Andrew'));


    });
    it('should check data type  correctly', function(){
           var name = 'Andrew';
       assert.typeOf(name, 'string');

    });

    it('should greet Karen fail not equal expected', function(){
        // this test will fail - can you fix it?

         assert.notEqual('Hello, Karen', greet('Andrew'),"Name is not equal to Karen");

     });
});
