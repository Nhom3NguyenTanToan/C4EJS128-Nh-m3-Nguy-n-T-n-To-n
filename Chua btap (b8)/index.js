// let ope =prompt("nhap phep tinh +,-,x,/:")
// let num1. num2, resullt;
// let num1 = parseInt(prompt("nhap so thu 1"));
//     let num2 = parseInt(prompt("nhap so thu 2"));
// if (ope == "+") {
//     resullt = num1 + num2 ;
//     console.log(resullt)
// } else if (ope =="-"){
//     resullt = num1 - num2 ;
    
// }else if 9ope =="*" {
//     result = num1 * num2;
// } else if ( ope =="/") {
//     resullt= num1 / num2;
// } else {
//     alert(khong ton tai)
// }
// alert(resullt)
// let num1,num2,result;
// let ope =prompt("nhap cac phep tinh +, -, *, /");
// let xet = true;
// while (xet){
// switch (ope) {
//     case "+":
//         num1 = parseFloat(prompt("nhap so thu nhat"))
//         num2 = parseFloat(prompt("nhap so thu 2"));
//         result= num1 + num2;
//         break;
//         case "-":
//         num1 = parseFloat(prompt("nhap so thu nhat"))
//         num2 = parseFloat(prompt("nhap so thu 2"));
//         result= num1 - num2;
//         break;
//         case "*":
//         num1 = parseFloat(prompt("nhap so thu nhat"))
//         num2 = parseFloat(prompt("nhap so thu 2"));
//         result= num1 * num2;
//         break;
//         case "/":
//         num1 = parseFloat(prompt("nhap so thu nhat"))
//         num2 = parseFloat(prompt("nhap so thu 2"));
//         result= num1 / num2;
//         break;
//         case "0":
//             xet = false;
//             break;
        
       


//     default:
//         break;
// // }
// }   
// const number = parseInt(prompt("nhap 1 so nguyen duong"));
// let isPrime = true;
// if (number == 1 ) {
//    alert ('1 khong phai la so nguyen to')

// } else if (number < 1) {
//     alert ('khong phai la so nguyen duong')

// } else if ( number >1) {
//     for ( let i = 2; i<number -1;i++){
// if (number %i ==0){
//     alert(`${number} khong phai la so nguyen to`)
// }else {
//     alert(`${number} la so nguyen to`)
// }Wrong
    //b3
    let day = parseInt(prompt("Nhập ngày"));
    let month = parseInt(prompt("Nhập tháng"));
    let year = parseInt(prompt("Nhập năm"));
    let arr1 = [1,3,5,7,8,10,12];
    if (day < 0 || day > 31) {
        console.log("Ngày này không tồn tại"); }
    else if (month > 12 || month < 0) {
        console.log("Ngày này không tồn tại");
    } else if((year % 4===0 &&year%100 !==0 && year % 400 !==0)||(year%100===0 && year % 400===0)){
        if (month == 2) {
            if (day > 29) {
                console.log('Ngày này không tồn tại')
            }
            else if(day == 29) {
                console.log(` Ngày ${day} Tháng ${month} Năm ${year}`);
                console.log(`Ngày tiếp theo là: \n Ngày 1 Tháng 3 Năm ${year}`)
            } else if (day >0 || day <= 28) {
                console.log(`Ngày ${day} Tháng ${month} Năm ${year}`);
                console.log(`Ngày tiếp theo là: \n Ngày ${day+1} Tháng ${month} Năm ${year}`)
            }
        } else if (arr1.includes(month)) {
            if (day == 31) {
               if(month == 12) {
                   console.log(` Ngày ${day} Tháng ${month} Năm ${year}`);
                   console.log(`Ngày tiếp theo là : \n Ngày 1 Tháng 1 Năm ${year + 1}`);
               } else {
                   console.log(` Ngày ${day} Tháng ${month} Năm ${year}`);
                   console.log(` Ngày tiếp theo là: \n Ngày 1 Tháng ${month + 1} Năm ${year}`);
               }
            } else {
                console.log(` Ngày ${day} Tháng ${month} Năm ${year}`);
                console.log(`Ngày tiếp theo là: Ngày ${day+1} Tháng ${month} Năm ${year}`)
            }
        }
    } else {
        if (month == 2) {
            if (day > 28) {
                console.log('Ngày này không tồn tại')
            }
            else if(day == 28) {
                console.log(` Ngày ${day} Tháng ${month} Năm ${year}`);
                console.log(`Ngày tiếp theo là: \n Ngày 1 Tháng 3 Năm ${year}`)
            } else if (day >0 || day < 28) {
                console.log(`Ngày ${day} Tháng ${month} Năm ${year}`);
                console.log(`Ngày tiếp theo là: \n Ngày ${day+1} Tháng ${month} Năm ${year}`)
            }
        } else if (arr1.includes(month)) {
            if (day == 31) {
               if(month == 12) {
                   console.log(` Ngày ${day} Tháng ${month} Năm ${year}`);
                   console.log(`Ngày tiếp theo là : \n Ngày 1 Tháng 1 Năm ${year + 1}`);
               } else {
                   console.log(` Ngày ${day} Tháng ${month} Năm ${year}`);
                   console.log(` Ngày tiếp theo là: \n Ngày 1 Tháng ${month + 1} Năm ${year}`);
               }
            } else {
                console.log(` Ngày ${day} Tháng ${month} Năm ${year}`);
                console.log(`Ngày tiếp theo là: Ngày ${day+1} Tháng ${month} Năm ${year}`)
            }
        }
    };

    
