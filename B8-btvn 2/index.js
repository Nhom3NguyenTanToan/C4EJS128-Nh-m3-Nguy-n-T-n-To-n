    // Điều kiện để là 1 số nguyên tố
    // điều kiện 1 : lớn hơn 1 
    // điều kiện 2 : NẾU NHƯ NGOÀI BẢN THÂN NÓ VÀ 1 RA , NÓ KHÔNG CHIA HẾT CHO SỐ NÀO KHÁC NỮA THÌ ĐÓ LÀ SỐ NGUYÊN TỐ 
    let n = prompt('Nhập số bạn nghi ngờ đó là số nguyên tố hay không');
    var textNum = true;
    // điều kiện 1  
    if (n < 2){ 
        textNum  = false;     
    }
    // điều kiện 2
    else if (n == 2){
        textNum  = true; }
    else if (n % 2 == 0){
        textNum  = false;
    }
    else{
        
        for (var i = 3; i < n-1; i+=2) // vòng lặp này ảnh hưởng số 2 ( )
        {
            if (n % i == 0){
                textNum  = false;
                break;
            }
        }
    }
    // in ra kết quả
    if (textNum  == true){
        alert(n + " là số nguyên tố ");
    }
    else{
        alert(n + " không phải là số nguyên tố ");
    }
// thực ra bài này khó với e vl