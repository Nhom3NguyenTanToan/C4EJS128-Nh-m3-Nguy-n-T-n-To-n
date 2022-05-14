// if (condition) {
//     if ()
// } else {
    
// }
// for ()
// while()
// function()
// {
//      let myDrink = "wine"
//      console.log(myDrink);  
// }
// let inputChoise = "black"
// let indexChoice = -1;
// for (let i = 0; i< menuCoffe.length;i++){
//     if(menuCoffee[i].toLowerCase() === inputChoice.toLowerCase()) {
//         indexChoice = i ;
//         break;
//     }

// }
// let resultArray = [];
// for (let i = 0; i< menuCoffe.length;i++){
//     if(menuCoffee[i].toLowerCase() === inputChoice.toLowerCase()) {
//         indexChoice = i ;
//         break;
//     }
// let a = "string AAA";
// let b = a ; ///"string AAA"
// let c = b ; ///"string AAA"

// b = b +"BBB";
// c = c +"ccc";
// console.log(a)
// console.log(b)
// console.log(c)
let menuCoffe = [
    "capuchino"
    "capuchino"
    "capuchino"
    "capuchino"

]
let copyMenu = menuCoffee;
let cloneMenu = copyMenu ;
copyMenu.push("chao long")
cloneMenu.push("Uc ga")
console.table(menuCoffe);
console.table(copyMenu);
console.table(cloneMenu)
// Kieu du lieu nguyen thuy 
// Kieu du lieu dang object

// mindX thanh Cong 
// 22C tahnh Cong
// Cho day them
// => 1 toa nha
let copyMenu = [];
for  (let index = 0; index<menuCoffe.legth; index++){
    copyMenu[index] = menuCoffe[index]
}
menuCoffe[6].push(" Kem cheesss");
let copyMenu = [...menuCoffe];/// shadow copy
// deep copy
let deepCopy = JSON.parse(JSON.stringify(menuCoffe))
// // for (const key in object) {
// //     if (Object.hasOwnProperty.call(object, key)) {
// //         const element = object[key];
        
// //     }
// }
for ( i in menuCoffee){
    console.log(i, menuCoffee)}


    // for (const iterator of object) {
        
    // }
    for ( i2 of menuCoffe){
        console.log(12)
    }
    menuCoffe.forEach((value, index)=> {
console.log(value, index)
    })
    let info = ["1m78", "80kg",1997 , "abc  ","dev"]
    let info = { 
        key: value // cach nhau bang dau phay

    }   
    let info = {
        height:"1.78m",
        weight:"80kg",
        dob:1997,
        myWord:"abc",
        job:"dev"
    }
    console.log(info);
    //CRUD of object
    //read 
    console.log(info.height);
    console.log(info.xxx)
    //update
    info.height= "178cm" ;
    console.log(info)
        //delete
    let info2 = {

    }
    info2.height="1m78"
    info2.height="1m78"
    info2.height="1m78"
    info2.height="1m78"
    info = info2;
    console.log(info)
    delete info.myWord
    //Add
    console.log(info);
    console.log(info["height"])
    info[height] = " akakak"
    console.log(info["height"]);
    info.newField = " lai la chao day"
    console.log(info)
const body = document.body;
body.style.backgroundImage = ' '
