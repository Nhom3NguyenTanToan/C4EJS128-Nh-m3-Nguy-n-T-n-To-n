function clock(){
    //Khởi tạo đối tượng timer sử dụng Date Object
    var timer = new Date();
    //Gọi các phương thức của đối tượng timer
    var current_day = timer.getDay();   
    var hour = timer.getHours();  //Lấy giờ hiện tại (giá trị từ 0 - 23)
    var minute = timer.getMinutes();  //Lấy phút hiện tại
    var second = timer.getSeconds();  //Lấy giây  hiện tại
    //Thêm ký tự 0 đằng trước nếu giờ, phút, giây < 10 với câu lệnh điều khiển if
    if(hour < 10) {
        hour = "0" + hour;
    }
    if(minute < 10) {
        minute = "0" + minute;
    }
    if(second < 10) {
        second = "0" + second;
    }
    var day_name = '';
 
// Lấy tên thứ của ngày hiện tại
switch (current_day) {
case 0:
    day_name = "Chủ nhật";
    break;
case 1:
    day_name = "Thứ hai";
    break;
case 2:
    day_name = "Thứ ba";
    break;
case 3:
    day_name = "Thứ tư";
    break;
case 4:
    day_name = "Thứ năm";
    break;
case 5:
    day_name = "Thứ sau";
    break;
case 6:
    day_name = "Thứ bảy";
} 
    //Hiện thị thời gian lên thẻ div id="clock" với phương thức innerHTML
    document.getElementById("clock").innerHTML = day_name+" "+ " "+ " " + hour + ":" + minute + ":" + second;
 }
 //Thực hiện hàm clock theo chu kỳ 1 giây
 setInterval("clock()",1000);
 



