function findItemsOver20(itemList,number){
   var results  =[];
  for(var i =0;i<itemList.length;i++){
    var item = itemList[i];
    if(item.qty>20){

      results.push(item);
    }
  }
  console.log(results);
  return results;
}
