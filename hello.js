
console.log("hello world...!");
console.log("hello world...!");
console.log("hello world...!");


let date = new Date();
h = date.getHours();

let input = 31;


if (date.getHours() < 12){
    console.log("오전 입니다.")
} else console.log("오후 입니다.")


console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDay());  //요일, 날짜가 아님 0=일요일 1=월요일 2= 화요일  
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());