function findItemsOver20(itemList){
   var results  =[];
  for(var i =0;i<itemList.length;i++){
    var item = itemList[i];
    if(item.qty>20){

      results.push(item);
    }
  }

  return results.length;
}



var itemList = [
  {name : 'apples', qty : 10},
  {name : 'pears', qty : 37},
  {name : 'bananas', qty : 27},
  {name : 'apples', qty : 3},
];

var itemList1 = [
  {name : 'apples', qty : 10},
  {name : 'pears', qty : 40},
  {name : 'bananas', qty : 17},
  {name : 'apples', qty : 3},
];
finditemOver(itemList);
finditemOver(itemList1);
