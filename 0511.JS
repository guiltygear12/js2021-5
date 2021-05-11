//예제 7-5

// let foo = new Date(1620710188000);
// console.log(foo);

//예제 7-6
// foo.setFullYear(foo.getFullYear()+1);
// foo.setMonth(foo.getMonth()+1);
// foo.setDate(foo.getDate()+1);

// console.log(foo);

//7-7
// let after = new Date();
// let before = new Date('may 19,2019');

// let interval = after.getTime()-before.getTime();
// interval = Math.floor(interval / (1000*60*60*24));

// console.log(interval);

//7-8
// let foo = [10,3,5,7,9];
// let bar = [
//     {
//         // key: value,
//         name: '호구마',
//         price: 1000
//     },
//     {
//         name: '감자',
//         price: 500
//     },
//     {
//         name: '바나나',
//         price: 1500
//     }
// ];

// let popped = bar.pop();
// console.log(popped);
// console.log(bar);
// console.log();

// bar.push(popped);
// bar.push(
//     {
//         name:'사과',
//         price:2000
//     },
//     {
//         name:'수박',
//         price:5000
//     }
// )
// console.log(bar);

// 7-10
let foo =[11,22,33,44,55]

foo.forEach((item,index)=>{
    console.log(`${index}-${item}`);
});
console.log("======================");
let bar = foo.map((item,index)=>{
    return item + 10;
});
console.log(bar);
console.log("======================");
let foobar = foo.filter((item,index)=>{
return item % 2 == 0;
});
console.log(foobar);