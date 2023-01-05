let bt1 = document.getElementById("bt1");
bt1.addEventListener("click", function(){
    let VatLy = parseInt(document.getElementById("vat-ly").value);
    let HoaHoc = parseInt(document.getElementById("hoa-hoc").value);
    let SinhHoc = parseInt(document.getElementById("sinh-hoc").value);
    let TB = (VatLy + HoaHoc + SinhHoc)/3;
    document.getElementById("kqua-bt1").innerHTML = "Diem trung binh 3 mon hoc la: " + TB.toString().slice(0,3);
})

let bt2 = document.getElementById("bt2");
bt2.addEventListener("click", function(){
    let Celsius = parseInt(document.getElementById("celsius").value);
    let Fahrenheit = Celsius*9/5 + 32;
    document.getElementById("kqua-bt2").innerHTML = "Nhiet do F la: " + Fahrenheit.toString().slice(0,4);
})

const PI = 3.14159265359;

let bt3 = document.getElementById("bt3");
bt3.addEventListener("click", function(){
    let radius = parseInt(document.getElementById("radius").value);
    let chuvi = radius*2*PI;
    document.getElementById("kqua-bt3").innerHTML = "Chu vi la: " + chuvi.toString();
})

let bt4 = document.getElementById("bt4");
bt4.addEventListener("click", function(){
    let radius = parseInt(document.getElementById("radius").value);
    let area = radius*radius*PI;
    document.getElementById("kqua-bt4").innerHTML = "Dien tich la: " + area.toString();
})