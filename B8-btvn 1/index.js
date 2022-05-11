// //Hàm có và không trả về giá trị
// Trong javascript có hai loại hàm,đó là hàm có giá trị trả về và hàm không có giá trị trả về.

// Đối với hàm có giá trị trả về thì phải sử dụng từ khóa return
// Và ngược lại đối với hàm không có giá trị trả về thì không có từ khóa return
// VD: khai báo hàm getSum ở trên là hàm có giá trị trả về.
// function getSum(a, b) {
// 	return a + b;
// }
 function tong(a, b){
    return a+b;
    }
    function hieu(a, b){
    return a-b;
    }
    function tich(a, b){
    return a*b;
    }
    function thuong(a, b){
    return a/b;
    }
    //Phương thức parseFloat() sẽ phân tích một chuỗi được cung cấp và trả về một giá trị số.
    var a = parseFloat(prompt('nhap so a = '));
    var b = parseFloat(prompt('nhap so b = '));
    var c = prompt('nhap bieu thuc tinh toan: ');
//     //switch (variable)
// {
//     case value_1 : {
//         // do some thing
//         break;
//     }
//     case value_2 : {
//         // do some thing
//         break;
//     }
//     default : {
//         // do something
//     }
// // }  Nếu như trong tất cả các case không có case nào phù hợp thì nó sẽ chạy lệnh ở default, 
//       ngược lại nếu có case nào phù hợp thì chương trình sẽ chạy trong case đó,
//       đồng thời lệnh break sẽ giúp chương trình thoát khỏi lệnh switch, 
//       còn nếu bạn không thêm lệnh break thì chương trình sẽ tiếp tục kiểm tra và chạy tiếp ở case tiếp theo.
    switch(c){
    case '+': {
    alert('a + b = ' +tong(a, b));
    break;
    }
    case '-':{
    alert('a - b = ' +hieu(a, b));
    break;
    }
    case '*':{
    alert('a * b = ' +tich(a, b));
    break;
    }
    case '/':{
    alert('a / b = ' +thuong(a, b));
    break;
    }
    }