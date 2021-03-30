let date = new Date();

console.log(date.getMonth()+1 + "월 입니다.")

switch(date.getMonth() + 1 ){
    case 12:
    case 1:
    case 2:
        console.log("겨울입니다.")
        break;
    case 3:
    case 4:
    case 5:
        console.log("봄입니다.")
        break;
    case 6:
    case 7:
    case 8:
        console.log("여름입니다.")
        break;
    case 12:
    case 1:
    case 2:
        console.log("가을입니다.")
        break;
    default:
        console.log("계절")
        break;
}

let test;

test = test ? test : "초기화 실행";
console.log(test);



test = test || "초기화 실행 해주세요"; 
console.log(test);
