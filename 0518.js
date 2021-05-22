// const fs = require('fs');

// // fs.readFile("test.txt",(error,file)=>{
// //     console.log(file);
// //     console.log(file.toString());
// // })

// // const fe = fs.readFileSync('test.txt');
// // console.log(fe);
// // console.log(fe.toString());

// // const a = fs.readFileSync('a.txt');
// // const b = fs.readFileSync('b.txt');
// // const c = fs.readFileSync('c.txt');

// // console.log(a+b+c);

// const a = fs.writeFileSync('a.txt','안녕하세요~'+'\n');
// const b = fs.writeFileSync('b.txt','감사해요~'+'\n');
// const c = fs.writeFileSync('c.txt','고마워요~'+'\n');

// const d = fs.readFileSync('a.txt');
// const e = fs.readFileSync('b.txt');
// const f = fs.readFileSync('c.txt');

// console.log(d+e+f);

// const request = require("request");
// const cheerio = require("cheerio");

// const url ='http://ncov.mohw.go.kr/';
// request(url,(error,response,body)=>{
//     const $ = cheerio.load(body);
//     console.log($("ul.suminfo>li>span.num").text());
// });

// const url = require('url');

// const parseObject = url.parse('https://naver.com');
// console.log(parseObject);

const request = require("request");
const cheerio = require("cheerio");

const url ='http://hanbit.co.kr/store/books/new_book_list.html';
request(url,(error,response,body)=>{
    const $ = cheerio.load(body);

    $('.view_box').each((index,element)=>{
        const title = $(element).find('_book_tit').text().trim();
        let writer = $(element).find('_book_writer').text().trim();
        writer = writer.split(',').map((item)=>item.trim());

        console.log(title);
        console.log(writer);
        console.log();
    })
});



