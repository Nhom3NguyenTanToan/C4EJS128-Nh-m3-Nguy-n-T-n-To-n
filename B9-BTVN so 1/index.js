//Create item
const list = ["dong", "bac", "vang"]
const newItem2 = "kim cuong"
list.push(newItem2)
console.log(list);
//Update item
const viTri = 1;
const newRanked = "bacI (updated)"

list[viTri] = newRanked;
console.log(list);
//Delete item
const anotherVitri = 1

list.splice(anotherVitri, 1)
console.log(list);
