let foo=[10,20,30,40,50];

for(let i in foo){
    console.log( `${i}번째 요소: ${foo[i]}이다.`)
}

// ${i}-> 인덱스값출력   ${foo[i]}-> 배열에 담겨져있는 결과값출력.



for(let item of foo){
    console.log(item)
}

let output = "";

for(let i = 0; i < 10 ; i++ ){
    for(let j = 0 ;  j < i ; j++ ){
        output += '*';
    }
    output +='\n';
}
console.log(output);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

let star = "";

for(let a=0;a<10;a++){
    for(let b = 0 ; b < 10 - a ; b++){
        star +=' ';
    }
    for(let b = 0 ; b < a + 1 ; b++){
        star +='*';
    }
    star += '\n';
}
console.log(star);