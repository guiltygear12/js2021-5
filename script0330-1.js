const { callbackify } = require("node:util");
const repl = require("repl");

repl.start({
    prompt:"숫자를 입력해주세요>",
    eval: (Command,context,filename,caooback) =>{
        let number = Number(command);
         if(isNaN(number)){
            console.log("숫자가 아닙니다.");
        } else {
            console.log("숫자 입니다.");
        }
        callback();
    }
})