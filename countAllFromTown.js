function countAllFromTown(regNumbers,town){
 var RegNum = regNumbers.split(',');
  var mylist =[];
  var first =0;
  for(var i=0;i<RegNum.length;i++){
    var space = RegNum[i].trim();
    if(space.startsWith(town)){
        first ++;


    }
  }
    console.log(first);
  return first;

}
