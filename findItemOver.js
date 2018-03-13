function findItemsOver(itemlist,threshold){
  var higherThreshold=[];

 for(var j=0;j<itemlist.length;j++){
     var temp = itemlist[j];
   if(temp.qty>threshold){
     console.log(threshold);
       higherThreshold.push(temp);
      }
 }
  console.log(higherThreshold);
  return higherThreshold;
}
