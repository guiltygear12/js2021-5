// let foo = function(){
//     console.log("첫번째 줄");
//     console.log("두번째 줄");
// }

// foo();
// console.log(foo);

// function a(){
//     console.log("함수의 첫 번째 줄");
//     console.log("함수의 두 번째 줄");
// }

// a();
// console.log(a);

// let arrow = () => {console.log("화살표 함수");}


// arrow();
// console.log(arrow);


// function power(x){
//     let bar = x*x;
//     return bar;
// }
// console.log(power(10));
// console.log(power(20));

// function print(message){
//     console.log(`"${message}"(이)라고 말했습니다!`);
// }
// print("안녕하세요");
// print("뿌잉뿌잉");

// function multiply(x,y){
//     return x * y
// }
// console.log(multiply(52,273));
// console.log(multiply(103,32));

// function print(name ="무명",count=1){
//     console.log(`${name}이/가 ${count}개 있습니다`);
// }
// print("사과",10);
// print("사과");
// print();

// function callTenTimes(callback){
//     for(let i = 0 ; i < 10 ; i++){
//         callback();
//     }
// }
// callTenTimes(function(){
//     console.log("함수 호출")
// });

let inputA = "12"
let inputB = "12.345"
let inputC = "123동"

console.log(parseInt(inputA));
console.log(parseInt(inputB));
console.log(parseFloat(inputB));
console.log(parseInt(inputC));

console.log(Number(inputA));
console.log(Number(inputB));
console.log(Number(inputC));

setTimeout(()=>{console.log("1초 경과!!")},1000)
setInterval(()=>{console.log("1초 경과!!")},1000)