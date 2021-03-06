#   박민형   [201840212]
<hr>

## ~~~~~ [ 06월 01일 ] ~~~~~

### 12장 

#### 12.1 구버전 웹브라우저네서 사용이 불가능한 키워드
##### 12.1.1 let과 const
ECMAScrpit6에서 최초로 도입된 개념으로 지원을하지않는 구버전에서는 사용이 불가능합니다

|최신버전|구버전|
|--|--|
|let a = 10;|var a = 10;|
|const b = 20;| var b = 20;|
##### 12.1.2 템플릿 문자열

최신버전에서 문자열을 넣을때에는
(`변수의 값은 ${변수이름} 입니다.`)
구버전에서는
(' 변수의 값은 ' + 변수이름 + '입니다.')
#### 12.1.3 화살표함수
ECMAScrpit6에서 최초로 도입된 개념 구버전에서는 사용이 불가합니다 function키워드 사용이 필요합니다
|최신버전|구버전|
|--|--|
|const functionLiteral=()=>{}|const functionLiteral= function(){}|

#### 12.1.4 for of 반복문
ECMAScrpit6에서 최초로 도입된 개념 for in반복문으로 대체하여야됩니다.

#### 12.1.5 사용불가 메소드 사용코드
array객체의 foreach(),map() 등등 ECMAScript5에서 추가된 메소드등을 지원하는지 여부확인이 필요하며 불가능할경우 사용이 불가합니다

### 12.2 브라우저 객체 모델

### 12.3 윈도우 객체
브라우저 크기 조절,시스템에서 작동하는 알림창,프롬프트 출력등을 할수있는 객체입니다

### 12.4 screen 객체
화면의 너비 높이 색상수 비트수 등을 관리하는 객체

### 12.5 location, history 객체
location객체는 웹브라우저의 주소와 관련된 객체입니다. 프로토콜의 종류,호스트이름,문서위치등의 정보를 가집니다.
history 객체는 뒤로가기 앞으로가기와 관련된 객체입니다.

### 12.6 navigator
navigator객체는 웹페이지를 실행하는 웹브라우저 정보가 담겨있습니다.

## 14장 jQuery

### 14.1장 jQuery 사용준비
 공식사이트: http://jquery.com/
동식웹사이트에서 \<download jQuery> 버튼을 누르면 다운로드 페이지로 이동이가능하다
jQuery 파일 혹은 cdn 경로를 구할수있다
* 파일을 이용하는 방법
\<script src="경로를 입력">\</script>
* CDN을 이용하는 방법
예시 구글 3.x버전 cdn
\<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js">\</script>

### 14.2장 jQuery객체
jquery는 $함수를 사용합니다
<pre>
<code>
    window jQuery = window.$ = jQuery
</code>
jQuery 객체생성 방법
<code>
//일반 문서 객체로 객체생성 방법
$(document)
// CSS선택자로 객체를 생성하는 방법
$('H1')
// HTML 선택자로 객체를 생성하는 방법
$('\<H1>\</H1>')
</code>
</pre>

### 14.3장 문장 객체 선택
<pre>
//h1 태그를 선택합니다
<code>
$('h1')
</code>
//h1 태그들중 logo클래스를 지닌 태그를 선택합니다
<code>
$('h1.logo')
</code>
// id 속성이 head인 태그를 선택합니다.
<code>
$('#head')
</code>
// input 태그중에 type속성이 submit인 태그를 선택합니다
<code>
$('input[type=submit]')
</code>

//h1 태그의 부모 태그를 선택합니다
<code>
$('h1').parent()
</code>
// h1 태그 내부에 있는 i태그를 선택합니다
<code>
$('h1').find('i')
</code>
</pre>

### 14.4장 문서 객체 개별 조작

$() 함수를통해서 여러개의 문서객체를 선택할수있습니다 이러한 문서객체가 몇개가 선택되었는지 알기위해서는 length속성을 사용합니다.

get() 선택한 문서객체중하나를 선택할수있습니다.

each() 선택한 문서객체에 반복을 적용합니다.

Array객체의 forEach()메소드
[].forEach(function(item,index){
    반복내용
});
jQuery의 each()메소드
$('h1').each(function(index,item){
    반복내용
});

### 14.5장 문서 객체 조작

#### 14.5.1 문자조작

|메소드|설명|
|--|--|
|text()|html 태그 내부의 문자를 변경합니다|
|html()|html 태그 내부의 문자변경(html태그를 인식합니다)|

$('p').text()
 html안에 있는 모든 p태그의 내용을 가져오게됨
$('p').html()
 html안에 있는 첫번째 p태그의 내용을 가져오게됨

 해당 값을 변경할때에는 ()안에 추가하여 태그내부의 값을 변경할수있습니다.

#### 14.5.2 스타일조작

css() 스타일을 조작할수있습니다.
<pre>
//h1 태그의 color 스타일 속성을 가져옵니다
<code>
$('h1').css('color')
</code>
// h1 태그의 color 스타일 속성을 red로 변경
<code>
$('h1').css('color','red')
</code>
// h1 태그의 color스타일 속성과 backgroundcolor스타일 속성을 한번에 설정합니다.
<code>
$('h1').css({
    color:'red';
    backgroundColor:'orange';
})
</code>
</pre>

#### 14.5.3 속성조작

attr() - 속성을 조작합니다.
<pre>
//img 태그의 src 속성을 가져옵니다
<code>
$('img').attr('src')
</code>
// img 태그의 src 속성을 변경
<code>
$('img').css('src','http://placehold.it/100x100')
</code>
// img 태그의 src속성과 alt 속성을 한번에 설정합니다.
<code>
$('img').attr({
    src:'http://placehold.it/100x100';
    alt:'placehold.it';
})
</code>
</pre>

### 14.6장 문서 객체 생성
|메소드|설명|
|--|--|
|$(\<A>).prependTo(\<b>)|a를 b안쪽 앞에 추가합니다|
|$(\<A>).appentTo(\<b>)|a를 b 안쪽 뒤에 추가합니다|
|$(\<A>).insertBefore(\<b>)|a를 b 앞에 추가합니다|
|$(\<A>).insertAfter(\<b>)|a를 뒤에 추가합니다|

### 14.7장 이벤트
|메소드|설명|
|--|--|
|on()|이벤트를 연결합니다|
|off()|이벤트를 제거합니다|

#### 14.7.1 이벤트 직접연결
<code>
    $('선택자').on('이벤트 이름','콜백함수')
</code>
예시
<pre>
<code>
$('h1').on('click',function (event){
    var text = $(this).text();
    alert(text);
});
</code>
</pre>

이벤트 목록

* 키보드이벤트

|메소드|설명|
|--|--|
|keydown()|키보드키를 눌렀을때|
|keypress()|키가 입력되었을때|
|keyup()|키보드 키를 떼었을때|

* 마우스 이벤트

|메소드|설명|
|--|--|
|click()|마우스 클릭할때|
|dbclick()|마우스 더블클릭됬을때|
|mousedown()|마우스 버튼을 눌렀을때|
|mouseenter()|마우스 커서가 해당 태그로 들어올때|
|mouseleave()|마우스 커서가 해당 태그에서 나갈때|
|mousemove()|마우스가 움직일때|
|mouseup()|마우스 버튼을 뗄때|
* 입력 양식 이벤트

|메소드|설명|
|--|--|
|blur()|입력양식에 값 입력을 종료할때|
|change()|입력양식의 값이 변경될때|
|focus()|입력양식에 값 입력을 시작할때|
|select()|type속성이 select인 입력양식의 목록에서 값을 선택할때|
|submit()|type속성이 submit인 입력양식을 클릭했을때|
* 웹 브라우저 이벤트

|메소드|설명|
|--|--|
|resize()|웹 브라우저의 크기를 변경할때|
|scroll()|웹브라우저를 스크롤할때|

#### 14.7.1 이벤트 직접연결
예를 들어 h1태그에 이벤트 를 줄때 h1태그가 아니라 부모태그에게 이벤트를 설정하고 부모태그에서 이벤트가 시작되도록하는 방법이다

<pre>
<code>
$('body').on('click','h1',function (event){
    //h1태그를 body태그에 추가합니다
    $('<\h1>< /h1>').text($(this).text()).appendTo('body');
});
</code>
</pre>

### 14.7.3 이벤트제거
이벤트를 제거하려면 off() 사용합니다.

<pre>
<code>
//웹페이지를 모두 로드하면
$('document').ready(function(){
    var handler = function (event){
        //h1태그를 body태그에 추가합니다
        $('<\h1>< /h1>')
            .text($(this).text())
            .click(handler)
            .appendTo('body');
        // 현재 태그의 이벤트를 제거합니다.
        $(this).off();
    }
    //h1 태그를 클릭하면
    $('h1').on('click',handler);
});
</code>
</pre>


<pre>
//h1태그의 모든 이벤트를 제거합니다
<code>
$('h1').off()
</code>
//h1태그의 모든 click 이벤트를 제거합니다
<code>
$('h1').off('click')
</code>
//h1태그의 모든 click 이벤트로 연결된 콜백함수중에 특정 함수만 제거합니다
<code>
$('h1').off('click',handler)
</code>
</pre>

one() 이벤트를 한번만 실행하게만듬

### 14.8장 애니메이션

animate() 애니메이션을 적용합니다.

<code>
$(선택자).animate(속성,시간,콜백함수)
</code>

<pre>
<code>
< !DOCTYPE html>
< html lang="en">
< head>
    < title>Document< /title>
    < script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js">< /script>
    < style>
        .box{
            /* 박스너비 */
            width: 100px;
            /* 박스 높이 */
            height: 100px;
            /* 박스 색상 */
            background-color: orange;
            position: absolute;
            /* 박스 위치 */
            left: 10px;
            top: 100px;
        }
    < /style>
    < script>
        // 웹페이지를 불러오면
        $(document).ready(function(){
            // box태그를 클릭해서
            $('.box').click(function(){
                // 1초 동안 left를 1000px로 변경합니다.
                $(this).animate({
                   left:1000 
                },1000);
            });
        });
    < /script>
< /head>
< body>
    < div class="box">

    < /div>    
< /body>
< /html>
</code>
</pre>


## ~~~~~ [ 05월 25일 ] ~~~~~


## ~~~~~ [ 05월 18일 ] ~~~~~


## 9장 node.js 기본

### 1. 전역 변수
장소에 제약없이 사용이 가능한 것들을 전역 00 이라고 합니다
전역 변수 , 전역 객체 , 전역 함수등...

##### 문자열 자료형의 전역변수
|||
|--|--|
|__filename|현재 실행중인 코드의 파일 경로를 나타냅니다|
|__dirname|현재 실행중인 코드의 폴더 경로를 나타냅니다|
### 2. process객체의 속성과 이벤트
node.js가 제공하는 전역 객체입니다.
>process 정보를 제공하며 제어를 돕는 객체입니다.

process객체의 속성
|속성|메소드|
|--|--|
|env|컴퓨터 환경 정보를 나타냅니다|
|version|node.js 버전을 나타냅니다|
|versions|node.js와 종속된 프로그램의버전을 나타냅니다|
|arch|프로세서의 아키텍쳐를 나타냅니다|
|platform|플랫폼을 나타냅니다|

process 객체의 메소드
|메소드|설명|
|--|--|
|exit([exitCode=0])|프로그램을 종료합니다.|
|memoryUsage()|메모리 사용 정보 객체를 리턴합니다|
|uptime()|현재 프로그램이 실행된 시간을 리턴합니다|

### 3. process 객체와 이벤트 개요
>자바 스크립트에서는 '이벤트' 요소를 많이 사용합니다.

이벤트사용방법
<code>
on(<이벤트 이름>,<이벤트 헨들러>)
</code>

이벤트 헨들러는 리스너 라고도 하며 이벤트 발생시 호출될 함수를 의미합니다

프로세스 객체의 이벤트
|이벤트|설명|
|--|--|
|exit|프로세스가 종료될때 발생|
|uncaughtExcoption|예외가 일어날때 발생|


### 4. os 모듈

os 모듈은 운영체제나 시스템의 정보를 확인하는 메소드가 다수 있는 모듈입니다.

|||
|--|--|
|hostname()|운영체제의 호스트이름 리턴|
|type()|운영체제의 이름을 리턴|
|paltform()|운영체제의 플랫폼을 리턴|
|arch()|운영체제의 아키텍쳐를 리턴|
|release()|운영체제의 버전을 리턴|
|uptime()|운영체제가 실행된 시간을 리턴|
|loadavg()|로드 에버리지 정보를 담은 배열을 리턴|
|totalmem()|시스템의 총 메모리를 리턴|
|freemem()|시스템의 사용가능한 메모리를 리턴|
|cpus()|cpu의 정보를 담은 객체를 리턴|
|getNetworkInetfaces()|네트워크 인터페이스의 정보를 담은 배열을 리턴|




### 5. url 모듈

<pre>
모듈을 추출합니다
<code>
const url = require('url');
</code>
모듈을 사용합니다
<code>
const parseObject = url.parse('https://naver.com');
console.log(parseObject);
</code>
Url {
  protocol: 'https:',
  slashes: true,
  auth: null,
  host: 'naver.com',
  port: null,
  hostname: 'naver.com',
  hash: null,
  search: null,
  query: null,
  pathname: '/',
  path: '/',
  href: 'https://naver.com/'
}
</pre>

### 6. File System 모듈

파일 처리와 관련된 모듈

|메소드|설명|
|--|--|
|fs.readFile(filename, [options], callback)|filename의 파일을 [options]의 방식으로 읽은 후 callback으로 전달된 함수를 호출합니다. (비동기적)|
|fs.writeFile(filename, data, [options], callback)|filename의 파일에 [options]의 방식으로 data 내용을 쓴 후 callback 함수를 호출합니다.(비동기적) |
|fs.readFileSync(filename, [options])|filename의 파일을 [options]의 방식으로 읽은 후 문자열을 반환합니다.(동기적)|
|fs.writeFileSync(filename, data, [options])|filename의 파일에 [options]의 방식으로 data 내용을 씁니다.(동기적)|

예제

<pre>
 readfile 예제
<code>
//main.js
var fs = require('fs');
 

// 비동기적 읽기
fs.readFile('text.txt', 'utf8', function(err, data) {
    console.log('비동기적 읽기 ' + data);
});

// 동기적 읽기
var text = fs.readFileSync('text.txt', 'utf8');
console.log('동기적 읽기 ' + text);
</code>
writefiel 예제
<code>
// main.js
var fs = require('fs');
 
var data = 'fs.writeFile test';
 
fs.writeFile('text1.txt', data, 'utf8', function(err) {
    console.log('비동기적 파일 쓰기 완료');
});
 
 
fs.writeFileSync('text2.txt', data, 'utf8');
console.log('동기적 파일 쓰기 완료');
</code>
동기적 예외처리 예제
<code>
// main.js
var fs = require('fs');
 
// 파일 읽기(동기적)
try {
	var data = fs.readFileSync('notexist.txt', 'utf8'); // 파일이 없는데 읽으려 함
	console.log(data);
} catch (err) {
    console.log(err);
}
</code>
비동기적 예외처리 예제
<code>
// main.js
var fs = require('fs');
 
// 파일 읽기
fs.readFile('notexist.txt', 'utf8', function(err, data) { // 존재하지 않는 파일 읽기
    if (err) {
        console.log(err); // 읽기 실패
    }
    else {
        console.log(data); // 읽기 성공
    }
});
</code>
</pre>


#### 비동기식 처리의 장점
c++ 등 의 프로그래밍 언어를 사용한다면 더욱 빠른 프로그램을 만들수있지만 제대로 만들기는 매우 어려우며 유지보수에 큰 어려움이 있습니다.
그리하여 많은 큰 기업에서는 c++로 개발을 하지않고 php 루비 자바 node.js등으로 개발을 하고있습니다.


### 7. 노드 패키지 매니저
과거의 프로그래밍언어들은 이러한 외부모듈을 설치하기가 어려웠습니다 하지만 현대의 언어들는 '패키지 매니저' 모듈 관리 프로그램을 사용해서 모듈을 쉽게 설치가 가능하다

파이썬은 pip 루비는 gem
node.js는 npm을 사용합니다

예시
npm install express(<- 설치하고싶은 모듈이름)




### 8. request 모듈

request 깃허브 링크
: https://github.com/request/request

<code>
const url ='http://ncov.mohw.go.kr/';
request(url,(error,response,body)=>{
    const $ = cheerio.load(body);
    console.log($("ul.suminfo>li>span.num").text());
});

</code>
> 네이버 홈페이지의 html 내용이 출력되게 된다.



### 9. cheerio

cheerio 링크
: https://github.com/cheeriojs/cheerio

예제
<pre>

<code>
//모듈 추출
const request = require("request");
const cheerio = require("cheerio");

//request 모듈 사용
const url ='http://hanbit.co.kr/store/books/new_book_list.html';
request(url,(error,response,body)=>{
    const $ = cheerio.load(body);

    //데이터 추출
    $('.view_box').each((index,element)=>{
        //변수선언
        const title = $(element).find('_book_tit').text().trim();
        let writer = $(element).find('_book_writer').text().trim();
        writer = writer.split(',').map((item)=>item.trim());
        //출력
        console.log(title);
        console.log(writer);
        console.log();
    })
});
<code>

</pre>


<hr>

## ~~~~~ [ 05월 11일 ] ~~~~~

## 4. Date 객체

|생성자 함수| 설명 |
|--|--|
|new Date()|현재 시간으로 Date 객체를 생성합니다|
|new Date(<유닉스 타임>)|유닉스 타임 (1970년1월1일0시0분0초로부터 경과된 시간 단위는 밀리초)으로부터 Date객체를 생성|
|new Date(<시간 문자열>)|문자열로 Date 객체생성|
|new Date(<년>,<월-1>,<일>,<시간>,<분>,<초>,<밀리초>)|시간요소를 기반으로 Date객체 생성|

## 5. Array 객체
>Array객체는 자바스크립트에서 여러 자료를 다룰때 사용하는 자료형

#### 5.1 Array 객체의 기본적인 메소드
|메소드|설명|
|--|--|
|concat()|매개 변수로 입력한 배열의 요소를 모두합쳐 배열로 만들어서 리턴|
|join()|배열안의 모든 요소를 문자열로 리턴|
|pop()*|배열의 마지막 요소를 제거후 리턴|
|push()*|배열의 마지막에 새로운 요소 추가|
|reverse()*|배열의 순서를 역순으로 변경|
|slice()|배열에 지정된 부분을 리턴|
|sort()*|배열의 요소를 정렬|
|splice()*|배열의 지정된 부분을 삭제후 리턴|
>*이 표기되어있는 메소드는 원본에 영향을 주게된다

#### 5.2 ECMAScript5 에서 추가된 메소드
|메소드|설명|
|--|--|
|forEacg()|배열의 요소를 하나씩 뽑아 반복을 돌립니다.|
|map()|콜백함수에서 리턴하는것을 기반으로 새로운 배열을 만듭니다.|
|filter()|콜백함수에서 true를 리턴하는것으로만 배열을 만들어서 리턴합니다.|


## 6.조금더 나아가기

#### 6.1 프로토 타입에 메소드 추가
프로토 타입에 메소드를 추가하면 해당 자료형 전체에 사용이 가능하게 추가가 가능합니다.
<pre>
<code>
//프로토 타입에 메소드를 추가
String.prototype.contain = funtion(input){
    return this.indexOf(input)>=-1;
};
//메소드 활용
console.log('안녕하세요'.contain('안녕'));
</code>
</pre>

#### 6.2 underscore.js 라이브러리

자바스크립트에서 굉장히 많은 기본함수가 존재합니다
하지만 개발방식에따라 부족한 부분이 있기마련입니다 그리하여 많은 개발자 들이 사용하는 기능 underscore.js 라이브러리에 정리되어 있습니다.

#### 6.3 JSON 객체

ECMAScript5 에서 추가된 개념입니다 json객체는 JavaScript Object Notaion의 약어로서 자바스크립트 객체를 사용한 데이터 표현 방법입니다

조건1. 문자열은 큰따옴표로 감쌀것
조건2. 모든키는 큰따옴표로 감싸야된다
조건3. 숫자 문자열 불 자료형만 가능합니다

json객체의 메소드

|메소드|설명|
|--|--|
|JSON.stringify(객체,변환 함수,공백 개수)|자바스크립트 객체를 문자로 만듭니다|
|JSON.parse(문자열)|문자열을 자바스크립트 객체로 만듭니다|

## 8장 예외 처리

#### 1. 예외와 예외처리

프로그램 실행중에 발생하는 문제를 <b>예외</b>라고 하며 이러한 문제를 해결하는것을 <b>예외 처리</b> 라고 합니다
#### 2. try catch finally 구문을 사용한 고급 예외 처리
<pre>
<code>
    try{
        // 해당 부분에서 예외 발생시 catch 부분으로 이동합니다
    } catch(Exception){
        // 여기서 처리됩니다
    } finally{
        // 무조건 적으로 실행되는 부분입니다
    }
</code>
</pre>


### 3. 예외를 강제로 발생시키는 경우
throw 키워드를 사용합니다

throw '강제 예외'


<hr> 

## ~~~~~ [ 05월 04일 ] ~~~~~

#### 4.3 프로토타입
>생성자 함수로 만들어진 객체는 프로토타입 이라는 공간에 메소드를 지정해서
모든객체가 공유하도록 만들수있다.

<pre>
생성자 함수
<code>
function Product(name,price){
    this.name = name;
    this.price = price;
}
</code>
프로토 타입에 메소드를 선언합니다.
<code>
Product.prototype.print = function(){
    console.log(`${product.name}의 가격은 ${product.price}원 입니다.`);
}
</code>
객체를 생성합니다.
<code>
let product = new Product("바나나",1200);
</code>
메소드를 호출합니다.
<code>
product.print();
</code>
</pre>

>프로토타입 기반의 객체지향언어는 자유성이 높아서 적응에 어려움을 많다는 의견이 있어서 <b>ECMAScript6 부터는 클래스 기능을 추가해서 클래스기반과 프로토 타입 기반 둘다 개발이 가능</b>합니다

# 7장 표준 내장 객체

## 1. 기본 자료형과 객체 자료형의 차이

<pre>
<code>
let number = 273;
let string = '안녕하세요';
let boolean = true;
console.log(typeof number);
console.log(typeof string);
console.log(typeof boolean);
</code>
>   number
    string
    boolean

    숫자 문자열 생성시 typeof를 사용하면 위와같은 결과값대신 object가 출력됩니다.
<code>
    let number = new Number(273);

    console.log(typeof number);
</code>
>   object
</pre>

>속성과 메소드는 객체가 소유할수있다는건 알지만 기본 자료형도 메소드를 가지고 있다는 것입니다
왜냐하면 <b> 기본자료형의 속성/메소드 를 사용시에 기본 자료형이 자동으로 객체로 전환 </b> 되기 때문입니다.

>기본 자료형 숫자의 속성및 메소드를 사용시에 자동으로 Number 객체로 전환되어 사용됩니다 즉 둘의 차이을 느끼기 어렵습니다.
차이점은 기본 자료형에는 속성및 메소드 추가가 불가능하다고 할수있습니다.

단, 프로토타입 을 사용하여 메소드를 추가하는것은 가능합니다.


## 2. Number 객체

숫자를 표현할때 사용하는 객체
#### 2.1 메소드

Number 객체가 가지는 메소드의 종류
|메소드|설명|
|--|--|
|toExponential()|숫자를 지수 표시로 나타낸 문자열을 리턴|
|<b>toFixed()</b>|<b>숫자를 고정소수점 표시로 나타낸 문자열을 리턴</b>|
|toPrecision()|숫자를 길이에따라 지수 표시 또는 고정소수점 표시로 나타낸 문자열을 리턴|

3가지 모두 유사한 기능을 수행함으로 대표적인 toFixed()를 예시로 보면

<code>
let number = 123.123456789;

console.log(number.toFixed(1));
console.log(number.toFixed(4));
</code>
/>   123.1
    123.1234

    이렇게 나오게 됩니다.

#### 2.2 생성자 함수의 속성
Number 생성자함수 자체도 속성을 지닐수있습니다.

<code>
function Constructor(){}
Constructor.property = 273;
Constructor.method = function(){};

console.log(Constructor.property);
console.log(Constructor.method);
</code>
-> 
273
[function]

###### Number 생성자 함수의 속성

|속성|설명|
|--|--|
|MAX_VALUE|자바스크립트의 숫자가 나타내는 최대의 숫자|
|MIN_VALUE|자바스크립트의 숫자가 나타내는 최소의 숫자|
|NaN|자바 스크립트의 숫자로 표현 불가능한 숫자|
|POSITIVE_INFINITY|양의 무한대 숫자|
|NEGATIVE_INFINITY|음의 무한대 숫자|


## 3. String 객체
가장 사용빈도가 높은 내장객체입니다.
생성방법은 두가지입니다.

<CODE>

let stringFromLiteral = '안녕하세요';

let stringFromConstructor = new String('안녕하세요');
</CODE>


#### 3.1 속성과 메소드

String 객체의 속성

length - 문자열의 길이를 나타냅니다.

문자수를 이용하는 프로그램은 많아 활용도가 높습니다.

메소드는 매우 다양하게 있습니다.
|메소드|설명|
|--|--|
|charAt(position)|position에 위치한 문자를 리턴|
|charCodeAt(position)|position 에 위치한 문자의 유니코드 번호 리턴|
|concat(args)|매개 변수로 입력한 문자열을 이어 리턴|
|indexOf(searchString,position)|앞에서부터 일치하는 문자열의 위치 리턴|
|lastindexOf(searchString,position)|뒤에서부터 일치하는 문자열의 위치 리턴|
|match(regExp)|문자열 안에 regExp 가 존재하는지 확인|
|replace(regExp,replacement)|regExp를 replacement로 변환후 리턴|
|search(regExp)|regExp 와 일치하는 문자열의 위치 리턴|
|slice(start,end)|특정 위치의 문자열을 추출후 리턴|
|split(separator,limit)|separator로 문자열을 잘라서 리턴|
|substr(start,count)|start 에서 count 만큼 잘라서 리턴|
|substring(start,end)|start -> end 까지 잘라서 리턴|
|toLowerCase()|문자열을 전부 소문자로 변경후 리턴|
|toUpperCase()|문자열을 전부 대문자로 변경후 리턴|

#### 3.2 메소드 활용

>문자열은 굉장히 많이 사용된다 예시를 보자

<code>

let string = '안녕하세요. 좋은 아침입니다.';

if (string.indexOf('아침')>=0){
    console.log('좋은 아침이에요...!');
}

</code>

위 코드에서 indexOf() 메소드는 매개변수로 받은 문자열이 어디에 위치하는지를 리턴합니다 만약 포함이 되지않는다면 -1 을 반환함으로 0보다 크다면 존재유무를 알수있습니다.




## ~~~~~ [ 04월 27일 ] ~~~~~

### 7 조금더 나아가기
#### 7.1 익명함수와 선언적 함수의 생성 순서

>실질적으로는 이름의 존재유무 이외에는 큰 차이가없음
차이점은 <b>생성 순서</b>이다 예제코드를 보면

<pre>
<code>
let 변수;

변수=10;
변수=20;

console.log(변수);
</code>
> 20
</pre>
>동일 이름으로 변수를 선언했으므로 뒤에 선언한 변수가 덮어쓰기를 하여 20을 출력한다.

>함수도 동일 하게 덮어쓰여진다.

<pre>
<code>
let 함수;
함수 = function(){console.log("1 번째 함수);};
함수 = function(){console.log("2 번째 함수);};\
함수();
</code>
>2 번째 함수
</pre>

>단, 선언적 함수는 조금 다르게 작동한다

<pre>
<code>
함수 = function() {console.log("1 번째 함수);};
function 함수() {console.log("2 번째 함수");};
함수();
</code>
>1 번째 함수
</pre>
>선언적함수가 먼저 실행후 익명함수가 만들어지며 덮어쓰게 되어 1번째가 출력된다.


#### 7.2 익명함수와 화살표 함수의 차이
>funtion(){} 형태로 선언하는 익명함수와 ()=>{}형태로 선언하는 화살표함수는 거의 비슷한기능을 수행한다.
하지만 다른 차이는 'this' 키워드의 의미가 다르다.

<pre>
익명함수 생성후 곧바로 출력
<code>
(funtion(){
    console.log(this);
})();
</code>
오류 발생
</pre>
>이러한 함수내부의 this 키워드는 자바스크립트 최상위 객체,외부에 강제연결된 객체를 표시합니다.

<pre>
화살표함수 생성후 곧바로 출력
<code>

(()=>{
    console.log(this);
})();
</code>
> {}
</pre>
>화살표함수의 this는 '자기자신과 관련된 것'만 나타냅니다.



## 6장 객체

### 1.객체 기본
객체는 여러개의 자료형을 저장하는 자료형입니다. 배열과 유사합니다.

<pre>
배열 선언
<code>
let array=["토끼","고양이","개","다람쥐"];
</code>
</pre>

<pre>
인덱스
<code>
array[0]  >  '토끼'
array[3]  >  '다람쥐'
</code>
</pre>

|인덱스|요소|
|--|--|
|0|토끼|
|1|고양이|
|2|개|
|3|다람쥐|

>배열의 인덱스와 요소는 위의 표와 같습니다.
배열에서는 인덱스로 접근한다면 객체는 키 값으로 접근합니다

객체 선언

<pre>
객체의 선언
<code>
let product = {
    이름: 'galaxy a90 5G',
    apu : 'snapdragon 855',
    스토리지: '128/256 G'
}
console.log(product);
</code>
>{
    이름: 'galaxy a90 5G',
    apu : 'snapdragon 855',
    스토리지: '128/256 G'
}
</pre>

객체의 키,속성은 다음과 같다
|키|속성|
|--|--|
|이름|galaxy a90 5G|
|apu|snapdragon 855|
|스토리지|128/256 G|

키값을 이용해서 접근하는 방식은 다음과 같다

<pre>
<code>
product['이름']
product.이름
</code>
>galaxy a90 5G
>galaxy a90 5G
</pre>
>2가지가 있으며 후자의 방법을 선호한다고한다

### 2.객체와 반복문
for in 반복문을 배열에 사용시 변수에 인덱스값을 넣을수 있던것 처럼 객체에 사용시 키가 들어가게된다
<pre>
<code>
let product = {
    이름: 'galaxy a90 5G',
    apu : 'snapdragon 855',
    스토리지: '128/256 G'
}
for (let foo in product){
    console.log(`${foo}: ${product[foo]}`)
}
</code>
>   이름: galaxy a90 5G
    apu : snapdragon 855
    스토리지: 128/256 G
</pre>

### 3. 속성과 메소드
배열 내부의 값 하나를 요소 라고 하며 객체 내부의 값은 속성이라 부릅니다, 배열과 마찬가지로 다양한 자료형을 사용할수있습니다

만약 객체 속성중 함수인 자료형이 있다면 그 속성을 메소드 라고 부릅니다.

<u>자신의 속성을 메소드에서 사용시에는 반드시 <b>this</b>키워드를 사용해야됩니다.</u>

### 4. 생성자 함수와 프로토 타입
#### 4.1 개요
>배열과 객체를 사용하여 여러개의 데이터를 쉽게 다룰수있습니다.

<pre>
<code>
let products={
    {name=Galaxy_a72,price=700000},
    {name=Galaxy_a52,price=590000},
    {name=Galaxy_a42,price=490000},
    {name=Galaxy_a32,price=390000},
}
</code>
</pre>

<pre>
메소드를 가지는 객체의 배열
<code>
let products = [
    {name:'S21 ULTRA',price:'1,390,000원',
        print:function(){
            console.log(`기종: ${this.name} 가격: ${this.price}`);
        }
    },
    {name:'S21 PLUS',price:'1,190,000원',
        print:function(){
            console.log(`기종: ${this.name} 가격: ${this.price}`);
        }
    },
    {name:'S21',price:'990,000원',
        print:function(){
            console.log(`기종: ${this.name} 가격: ${this.price}`);
        }
    }
]
for(let product of products){
    product.print();
}
</code>
</pre>

>함수의 형태로 만들어 코드를 줄일수도있지만 될수있으면 객체지향 프로그래밍의 특성을 살려서 위와같은 코딩을 하는것이 바람직하다.

#### 4.2 생성자 함수
> 객체를 만드는함수 입니다 다음과 같이 생성하고 객체를 생성하며  다른 함수와 차이를 두기위해 대문자로 시작하는것이 바람직합니다.

<pre>
<code>
//생성자 함수
function Product(name,price){
    this.name = name;
    this.price = price;
}
// 객체 생성
let product = new Product("바나나",1200);
//출력
console.log(product);
</code>
>product{name:바나나,price:1200}
</pre>



<hr/>
중간고사 범위 끝

## ~~~~~[ 04월 13일 ] ~~~~~

## 5장 함수

### 1.함수 생성 방법

#### 1-1 익명 함수
>이름을 붙히지 않고 함수를 생성
함수를 호출하면 함수 내부의 코드 덩어리가 모두 실행
자주 사용되지않거나 일회성인 경우 등에 주로 사용된다.

<pre>
<code>
    let <변수이름> = function(){};

    let 함수 = function(){
        console.log("함수의 첫 번째 줄");
        console.log("함수의 두 번째 줄");
    }

    함수();
    console.log(함수);

    >
    함수의 첫 번째 줄
    함수의 두 번째 줄
    [Function]
</code>
</pre>
#### 1-2 선언적 함수
>이름을 붙혀 함수를 생성
일반적으로 가장 많이 사용된다.

<pre>
<code>
    let <변수이름>(){};

    function 함수(){
        console.log("함수의 첫 번째 줄");
        console.log("함수의 두 번째 줄");
    }

    함수();
    console.log(함수);

    >
    함수의 첫 번째 줄
    함수의 두 번째 줄
    [Function:함수]
</code>
</pre>

#### 1-3 화살표 함수 [ECMAScript6]
>'하나의 표현식을 리턴하는 함수'를 만들때는 중괄호 생략 가능
익명 함수 예제를 화살표 함수로 바꾼다면

<pre>
<code>
    () => {}

    let 함수 = () => {
        console.log("함수의 첫 번째 줄");
        console.log("함수의 두 번째 줄");
    }

    함수();
    console.log(함수);

    >
    함수의 첫 번째 줄
    함수의 두 번째 줄
    [Function]
</code>
</pre>


### 2. 함수의 기본형태
#### 2.1 함수의 기본형태 예제
<pre>
    <code>
    function <함수이름>(<매개변수>){
        <함수코드>
        return <리턴값> <!-- 리턴값은 코드에따라서 없을수도있음 -->
    }

    function power(x){
        return x * x;
    }
    console.log(power(10));
    console.log(power(20));
    </code>
</pre>

#### 2.2 매개 변수가 여러 개인 함수

<pre>
<code>
function multiply(x,y){
    return x * y
}
console.log(multiply(52,273));
console.log(multiply(103,32));
</code>
</pre>

#### 2.3 리턴이 없는 함수

<pre>
<code>
function print(message){
    console.log(`"$(message)"(이)라고 말했습니다!`)
}
print("안녕하세요");
print("뿌잉뿌잉")
</code>
</pre>


### 3. 함수의 기본 활용 형태
>리턴하는 함수의 기본 형태

<pre>
<code>
function (매개변수,매개변수){
    let output = 초기값;
    // output 계산~~
    reutrn output;
}
</code>
</pre>

### 4. 함수 매개 변수 초기화
>매개변수를 입력하지않고 함수를 호출
>-> 실행하면 undifined 가 출력됩니다.

<pre>
<code>
function print(name,count){
    console.log(`$(name)이/가 $(count)개 있습니다.`)
}
print("사과", 10);
print("사과");
</code>
</pre>

### 5.콜백 함수
>함수의 매개변수로 전달되는 함수

### 6. 표준 내장 함수

#### 6.1 숫자변환 함수
자바스크립트에서 기본적으로 지원하는 함수

|함수|설명|
|--|--|
|parseint()|문자열을 정수로 변환합니다.|
|parseFloat()|문자열을 실수로 변환합니다.|

#### 6.2 타이머 함수
> 특정시간후에 / 특정시간마다 어떠한 일을 수행할때사용
시간은 밀리초로 지정 1초 = 1000 밀리초

|함수|설명|
|--|--|
|setTimeout(함수,시간)|특정 시간 후에 함수를 실행합니다.|
|setInterval(함수,시간)|특정 시간마다 함수를 실행합니다.|

<hr/>

## ~~~~~[ 04월 06일 ] ~~~~~

### 6. 중첩 반복문
><b>반복문을 여러번 중첩하여 사용</b>하면 중첩 반복문이라고 합니다.

<pre>
<code>
// 별 피라미드 예제 1번
let output = "";

for(let i = 0; i < 10 ; i++ ){
    for(let j = 0 ;  j < i ; j++ ){
        output += '*';
    }
    output +='\n';
}
console.log(output);
</code>

*   <-출력
**
***
****
*****
******
*******
********
*********
</pre>

<pre>
<code>
// 별 피라미드 예제 2번
let star = "";

for(let a = 0 ;a < 10 ; a++ ){
    for(let b = 0 ; b < 10 - a ; b++ ){
        star +=' ';
    }
    for(let b = 0 ; b < a + 1 ; b++ ){
        star +='*';
    }
    star += '\n';
}
console.log(star);
</code>
출력->    *
         **
        ***
       ****
      *****
     ******
    *******
   ********
  *********
 **********
</pre>

### 7. break 키워드
>switch 조건문이나 반복문을 벗어날때 사용됩니다, 무한반복문 중간에 특정 조건만족시 break 키워드를 사용해서 탈출이 가능합니다.
### 8. continue 키워드
>반복문 내부에서 현재 반복을 중지하고 다음 반복을 진행합니다.

<pre>
예시
<code>
for (let i = 1; i < 10; i++){
    if(i % 2 == 0){
        continue;
        //짝수일때 해당 조건문이 참이되며 
        //다음코드를 실행하지않고 반복문이 다시시작됩니다.
    }
    console.log(i)
}
</code>
</pre>

### ★배열에 사용할수있는 함수 
>배열에 사용하는 함수
<pre>
예시
<code>
//push      배열 뒷쪽에 값을 추가
//pop       배열 뒷쪽에 값을 제거
//shift     배열 첫번째 값을 제거
//concat    배열 두개를 병합
//reverse   배열을 역순으로 재배치
//sort      배열에 속한 값을 정렬해주는 키워드
//slice     배열에 지정한 범위만 잘라서 보여줌(배열원본에는 변화가없다)
//splice    배열에 지정한 범위만큼 잘라서 보여줌(표시된 값은 배열에서 제거된다.) 자른 부분에 배열을 다시 넣어줄수있음
//join      배열값 사이에 문자를 삽입할수 있음
</code>
</pre>

### 9.조금더 나아가기

#### 9.1 스코프

##### 블록 
>블록 내부에서 선언된 변수는 블록 내부에서만 사용이 가능하다(지역 변수)
반대로 블록 외부에서 선언된 변수는 모두 사용이 가능하다.(전역 변수)

<!-- #### 9.2 호이스팅
>추가 바람 -->
#### 9.3 var 키워드
>현대 자바스크립트에서는 일반적으로 let 키워드를 사용하지만 인터넷 익스플로러에서는 let과 const를 지원하지 않으므로 var로 사용해야되고 오래된 코드들은 대부분 var로 이루어져있습니다.

<hr/>

## ~~~~~ [ 03월 30일 ] ~~~~~

### 3. 중첩 조건문

> if 문 작성시에 중첩하여 작성하는것이 가능하지만 필요이상의 조건문이 과다하게 사용되었는지 주의가 필요합니다.

### 4. if else if 조건문

>중복되지않는 세 가지 이상의 조건울 구분할때 사용합니다

if(){

} else if (){

} else if () {

} else {

}

##### ★ 조건문에 조건식 작성시
> 수학에서 어떠한수 a에 대한 범위를 " 100 < a < 1000 " 라고 표현 하지만 프로그래밍 언어로 표현 할때에는
100 < a && a < 1000 이러한 식으로 논리연산자를 활용하여 표현하여야한다
### 5. switch 조건문
<pre>
<code>
switch (<비교할값>){
    case(결과값 1){
        <출력할내용>
        break;
    }
    case(결과값 2){
        <출력할내용>
        break;
    }
    case(결과값 3){
        <출력할내용>
        break;
    }
}
</code>
</pre>

<b>★★★ break; 를 작성하지않으면 해당 결과값 아래에 있는 모든 코드를 시행 하므로 주의가 필요하다.</b>


### 6. 삼항 연산자
> <불 표현식> ? <참> : <거짓>

<pre>
<code>
let number = 10;
console.log(number % 2 == 0? "짝수" : "홀수" ) 
</code>
</pre>

### 7. 짧은 초기화 조건문
> || 연산자를 불이 아닌 자료에 사용하는 경우
> * a||b 에서 a가 참인 경우 a로 대치
> * a||b 에서 a가 거짓이라면 b로 대치 

### 8. 조금더 나아가기
>웹 브라우저에서 작동하는 자바스크립트: prompt() 이름의 함수를 받음
>node.js에서 작동하는 자바스크립트: 단순한 코드로 입력을 받을 수 없음 p.105

##  4장  반복문
>배열 생성하고 사용하는 방법을 익힙니다.
>while / for 반복문을 이해합니다.
>for in / for of 반복문을 이해합니다.
>break / continue 키워드를 이해합니다.

### 0. 반복문
>코드를 복사하여 출력이 가능은 하지만 1000줄 2000줄도 그렇게하기에는 무리가있다
>그렇기에 반복문을 사용하는것이 바람직하다.

### 1. 배열
>* 여러 개의 자료를 한꺼번에 다룰수있는 자료형
>* 대괄호 내부의 각 자료는 쉼표로 구분
>* 배열에는 여러 자료형이 섞일수있음

요소: 배열안에 들어있는 각 자료

### 2. while 반복문
<pre>
<code>
    while( 조건식 ){
        //조건식이 참일때 시행할 내용
    }
</code>
</pre>
> 조건식에 true 값을 넣으면 무한반복문을 만들수도 있다.
while 문은 반복횟수가 불특정한 경우에 주로 사용한다.
후에 기술할 for 문은 주로 반복횟수가 비교적 정확한 경우에 사용한다.

### 3. for 반복문
>for 반복문의 각 단계
1.  초기식을 비교
2.  조건식을 비교
    조건이 false이라면 반복문 종료
3.  문장을 실행
4.  종결식을 실행
5.  2단계로 이동

### 4. 역 for 반복문
>보통 증감연산자를 ++를 사용하나 반대로 --를 사용하는 경우도 존재한다.

<code>
for (let i = 0;i >=0 ; i--){
}
</code>

### 5. for in / for of 반복문

<code>

let 배열 = [~~ 배열 내용 ~~]
for (let 인덱스 in 배열){
    index 값도 필요할때
}

for (let 요소 of 배열){
    단순하게 배열내부에 값들만 필요할때
}

let foo=[10,20,30,40,50];


//for in 예제

for(let i in foo){
    console.log( `${i}번째 요소: ${foo[i]}이다.`)
}

//${i}-> 인덱스값출력   ${foo[i]}-> 배열에 담겨져있는 결과값출력.

</code>



<hr/>

## ~~~~~  [ 03월 23일 ]  ~~~~~

### 3.2 문자열
>문자의 집합을 의미하며 "hello world","안녕하세요"등의 형태를 문자열이라고 한다

##### 기본 문자열
>자바 스크립트에서는 기본적으로 큰 따옴표(""),작은 따옴표('') 안에 문자열을 생성한다
>ex) '안녕하세요' / "반갑습니다"
>방법은 자유이지만 될수있다면 <u>한가지로 통일하는것을 권장한다</u>단, 문자열 내부에 따옴표를 사용해야되는 경우에는 동시에 사용하기도한다
>'친구가 멀리 걸어오는 선생님에게 허리를 숙이며 "안녕하세요 선생님" 이라고 했다'

##### 이스케이프 문자
>이스케이프 문자는 특수기능을 수행하는 문자입니다

| 이스케이프 시퀀스 | 의미 |
|:--|--|
|\a|경고음|
|\b|백스페이스|
|\f|페이지 나누기|
|\n|줄바꿈|
|\r|복귀|
|\t|수평 탭|
|\v|수직 탭|
|\\|\|
|\'|'|
|\"|"|
|\?|?|
|\ooo|8진수 ooo문자 코드로표기할수있는문자(o은 0~7까지의 숫자)|
|\xhh|16진수 hh문자코드로 표기하는문자(h는 0~9까지의 숫자)|



#### 문자열 연결 연산자
>문자열 연결 연산자(+)로 문자열을 연결할수있습니다.

console.log("안녕"+"하세요");
->안녕하세요

#### 문자 선택 연산자
>문자 선택 연산자는 특정한 문자 선택이 가능합니다

console.log("안녕하세요"[0]);
console.log("안녕하세요"[1]);
console.log("안녕하세요"[4]);

안
녕
요

#### 템플릿 문자열 (ECMAScript6)
>`기호로 생성이 가능합니다 생성된 문자는 작은 따옴표로 만든 문자열이 생성된다 추가로 내부에 ${표현식}을 넣어서 계산된 값이 출력되도록 할수있습니다.단,미 지원 브라우저가 존재할수있으므로 사용에 주의가 필요합니다.

`52 + 723 = ${52+ 723}`
->52 + 723 = 325

### 3.3 불
>참/거짓을 판별 하여 표현하여야될때 사용합니다 주로 비교연산자를 활용하여 두개 혹은 그이상의 값을 확인하여 참과 거짓의 값을 받아오게됩니다

#### 비교 연산자



| 수 식 | 연 산 결 과 |
|:--|--|
| x > y |x가 y보다 클때 ture 나머지 false|
| x < y |x가 y보다 작을때 ture 나머지 false|
| x >= y|x가 y보다 크거나 같을때 ture 나머지 false|
| x <= y|x가 y보다 작거나 같을때 ture 나머지 false|
| x == y|x와 y가 같을때 ture 나머지 false|
| x != y|x와 y가 같지않을때 ture 나머지 false|

>예시 console.log(50 > 300); -> false

#### 논리 연산자



|연산자|사용 예|설명|
|:--|--|--|
| &&    | A && B    | and연산, A와B 모두 참일때만 참이다.   |
| \|\|  | A \|\| B  | OR연산, A 혹은 B 둘중 하나만 참이어도 참이다.  |
| !     | !A        | NOR연산, A가 참이면 거짓 , 거짓이면 참이된다.  |


>예시 console.log(!true); -> false
>논리 합연산자(||) 혹은 논리 곱 연산자(&&)를 사용하는 경우가 꽤 많은 편인데 주의할점으로는 범위에 대한 판단인데 예를 들어 [ 30 > 20 > 10 ] 이런 식으로 만든다면 false라고 반환이 된다 이유는 컴퓨터는 왼쪽부터 우선순위를 두어 30 > 20 을 true값으로 변환 하고 true는 1로 변환 1>10은 false이기에 정답은 false를 내어주게 됩니다

>3< 현재시간 <8 라는 범위를 만든다 가정하면
> 현재시간 < 3 || 현재시간 < 8 이런식으로 만들어야된다

### 4 변수
>변수는 값을 저장하여 사용할때 사용합니다
>숫자및 모든 자료형을 담을수있습니다.

>변수를 선언 하고 값을 할당하여 사용할수있게됩니다.

let 변수이름 (변수 를 선언합니다)

변수이름 = 변수에 저장할 값 (변수에 값을 할당)

### 5. 복합 대입 연산자
> ( = ) 대입 연산자를 활용해서 사용이가능한 특수한 연산자가 존재합니다, += 연산자는 문자열을 더해줄때에도 사용이 가능합니다.





|연산자|설명|
|--|--|
|+=|기존 변수의 값에 값을 더합니다.|
|-=|기존 변수의 값에 값을 빼줍니다.|
|*=|기존 변수의 값에 값을 곱해줍니다.|
|/=|기존 변수의 값에 값을 나눠줍니다.|
|%=|기존 변수의 값에 나머지를 구해줍니다.|

### 6. 증감 연산자
>변수에 적용이 가능한 연산자로 전위 혹은 후위에 붙여서 가능하며 전위와 후위에 차이에 주의를 하며 사용하여야됩니다.

|증감 연산자|설명|
|--|--|
|++X|먼저 피연산자의 값을 1 감소 후에 연산진행|
|X++|먼저 해당연산 진행후 피 연산자의 값을 1 감소|
|--X|먼저 피연산자의 값을 1 감소 후에 연산진행|
|X--|먼저 해당연산 진행후 피 연산자의 값을 1 감소|


### 7. 자료형 검사
>변수에 원하는 형태의 자료형이 존재하는지 알아보가 위해 사용이 가능한 방법이 존재합니다

typeof - 해당 변수의 자료형을 추출합니다.

ex) typeof 10 > 'number'  /  typeof "문자열" > 'string'


### 8. undefined 자료형
>undefined 자료형은 변수는 선언하였으나 초기화를 진행하지않은 상황 일때 나타납니다

ex)  let a (변수선언 초기화x) > undefined

### 9. 강제 자료형 변환
>자료형의 형태를 강제로 바꾸고 싶으면 해당 변수를 활용할수 있습니다

Number()    >   숫자로 변환합니다
String()    >   문자열로 변환합니다
Boolean()   >   불로 변환합니다

>String() 함수는 매개변수로 숫자를 넣으면 문자열로 변환해주며 매우 간단합니다 true,false등 불값도 가능합니다
단 number,boolean은 결과값과 true,false 로 변환되는 방법에 주의점이 생기므로 사용에 주의가 필요

#### 9-1 Number() 함수와 NaN

>Number()에 숫자로 구성된 문자를 삽입시 숫자로 변환이 가능하며 불값인 true,false는 각각 1,0으로 변환이 됩니다 추가로 숫자가 아닌 문자열은 NaN( Not a Number ) 로 출력합니다

NaN ( Not a Number )의 특징
NaN 은 무조건 다릅니다
NaN 은 숫자 자료형은 맞지만 숫자가 아닙니다
NaN 을 확인할때에는 isNaN() 을 사용합니다

#### 9-2 Boolean()
>다음 5개의 요소를 true 로 반환 그 이외의 요소는 false로 반환합니다.

0   /   NaN   /   ""[빈 문자열]  /  null   /   undefined


### 10 자동 자료형 변환

>숫자와 문자열에 + 를 사용하면 자동으로 숫자가 문자열로 변환됩니다.

1. 10 + 20      >   30  
2. "10" + 20    >   1020
3. 10 + "20"    >   1020
4. "10" + "20"  >   1020

### 11 일치 연산자

>일치 연산자는 기존에 비교 연산자와는 달리 <u> 자료형도 일치하는지 확인하는 </u> 연산자 입니다

=== > 자료형과 값이 동일한지 확인합니다
!== > 자료형과 값이 다른지 확인합니다

### 12. 상수

>ECMA Script6 부터 생긴 것으로 상수를 만들수있습니다 상수는 <u> '항상 같은수'라는 의미로 변수와 반대되는 개념 </u> 입니다. 상수는 선언후 초기화된 값에서 변경이 불가능 합니다.


## 3장 조건문

### 1. if 조건문
>조건문 중에서 가장 간단한 형태의 조건문 입니다

if ( 조건식 ) { 조건에 해당할때 시행되는 코드 }


![if 조건문](./picture/if.jpg)


### 2. if-else 조건문
>2가지로 분명하게 나뉘는 상황에서 사용이 가능한 조건문입니다.

if ( 조건식 ) {
    조건식이 참 일때 시행되는 코드
} else {
    조건식이 거짓일때 시행되는 코드
}


![if else 조건문](./picture/if_else.jpg)

<hr/>

## ~~~~~  [ 03월 16일 ]  ~~~~~
### 2 자바 스크립트로 할 수 있는 일
>자바 스크립트 초기에는 웹 클라이언트 개발에만 이용이 가능하였음<br /> 
>2010년 이후 서버,게임,스마트폰 어플리케이션,데스크톱 에플리케이션 개발등...<br />
>다양한 분야에도 사용이 가능한 언어로 발전되었습니다

#### 2.1 웹 클라이언트 애플리케이션 개발
> 자바스크립트는 웹 브라우저에서 실행되는 <u>웹 클라이언트 애플리케이션 개발을 목적</u>으로 만들어졌습니다.
> 자바 스크립트는 <u>모든 웹 브라우저에서 작동이 가능</u>한 유일한 프로그래밍 언어 입니다

#### 2.2 웹서버 개발
> 기존의 웹 클라이언트는 개발은 자바스크립트 웹 서버는 c#,자바,루비,파이썬 등의 언어로 개발 되었습니다. 그래서 웹 개발을 시도하려면 2가지의 언어를 사용해야되었습니다.
> node.js의 등장으로 자바스크립트 만 사용하여 클라이언트와 서버를 하나의 언어로 개발하는것이 가능해졌습니다.

@웹 페이지를 직접적으로 출력 하지 않아도 웹 프로토콜 (http / https) 을 활용하면 웹 서버로 칭합니다

>node.js 의 단점으로는 웹 서버 개발시에 간단한 모듈을 제공하고 있기때문에 다른 스크립트 언어에 비하여 데이터 처리및 예외 처리등이 다소 복잡할수 있습니다.
>장점으로는 서버 유지비가 평균적으로 1/10정도 로 줄어들지만 20배 이상 빠른 처리 속도를 보여 주기에 큰 메리트가 존재합니다.

#### 2.3 모바일 애플리케이션 개발
>스마트폰에 사용되는 언어는 pc에 비해 제한적입니다.
>자바 혹은 스위프트 로 개발되어 기본적으로 인식이 가능한 언어로 만들어진 애플리케이션을 '네이티브 애플리케이션' 이라고 합니다.

>기업에서 애플리케이션을 개발을 할때에는 자바와 스위프트를 모두 사용해서 만들어야되는데 시간,인력등 비용이 2배가 들어가게됩니다.

>하지만 자바 스크립트를 사용한다면 모든 스마트폰에서 인식이 가능하도록 개발이 가능합니다.

*react native: 자바스크립트로 네이티브 애플리케이션을 개발이 가능하도록 해줌 페이스북,사운드 클라우드 등 자바스크립트로 제작됨

#### 2.4 데스크톱 애플리케이션 개발

>자바스크립트로 모바일 애플리케이션 개발이 증가하자 데스크톱 애플리케이션 도 자바스크립트로 만들자는 의견이 발생

>자바스크립트로 개발 전용 텍스트 에디터를 제작및 배포

#### 2.5 게임 개발

>기존의 게임은 서버와 클라이언트 모두 c++로 제작 되어왔습니다,개발의 난이도는 높으편 이지만 c++가 동작하는 속도가 빠르기때문

>스마트폰이 활성화가 되어가면서 여러가지 운영체제에 맞는 앱을 개발하지말고 한번에 모든 운영체제에서 구동이 가능한 애플리케이션을 개발하는것이 경제적으로 이득이기 때문이며 특히 게임은 다른 분야보다 복잡하고 비용이 많이들어가기 때문입니다

>초기에는 플래시와 같은 모든 운영체제에서 구동이 가능한 플렛폼을 활용했습니다 애니팡도 플래시로 만들어졌습니다

>고가의 게임 엔진이 저렴하게 배포되기 시작했는데 그것이 바로 '유니티'입니다

>유니티는 모노 프로그램을 기반으로 유니티 스크립트,마이크로소프트에서 만든 c#을 이용해서 다양한 플래폼(윈도우,맥,리눅스...)등에서 동작이 가능합니다 한마디로 자바스크립트를 통하여 모든 운영체제를 호환하는 게임을 개발할수 있다는것입니다

#### 2.6 데이터베이스 관리

>데이터베이스 는 보통 SQL프로그래밍 언어를 이용해서 관리합니다.

>Oracle,MySQL,Microsoft SQL Server,MongoDB, PostgreSQL등 을 사용합니다 그중 MongoDB 는 자바스크립트를 사용하는 NoSQL입니다

## 2장~~~~~~~~~~~~~~~~~~~~~~~~~

### 1 기본 용어
> 자바 스크립트에서 자주 사용되는 기본 용어 입니다.

#### 1.1 표현식과 문장
>273
>10 + 20 + 30 * 2
>"JavaScript Programming"
표현식이 모여서 문장이되고 그 문장이 마칠때마다 세미콜론 < ; > 을 반드시 찍어주어야됩니다. 그러면 그 문장들이 모여서 하나의 프로그램이 될것입니다.

console.log("hello world...!"); <- ; 반드시

#### 1.2 키워드 
키워드는 특별한 의미가 부여된 단어로 자바스크립트를 처음 개발하던때에 정한 단어 입니다 해당 단어로 식별자를 만드는 것은 불가능합니다.

||||||
|--|--|--|--|--|--|
|abstract|arguments|await*|boolean|break|byte|
|case|catch|char|class*|const|continue|
|debugger|default|delete|do|double|else|
|enum*|eval|export*|extends*|false|final|
|finally|float|for|function|goto|if|
|implements|import*|in|instanceof|int|interface|
|let*|long|native|new|null|package|
|private|protected|public|return|short|static|
|super*|switch|synchronized|this|throw|throws|
|transient|ture|try|typeof|var|void|
|volatile|while|with|yield||
*표시가된 단어는 ECMAScript 5,6 에서 추가된 단어입니다.

#### 1.3 식별자
>변수,함수등에 임의로 붙이는 이름입니다,단 다음과 같은 규칙에 따릅니다

>1. 키워드를 사용할수 없습니다.
>2. 특수문자는 _ 와 $ 만 가능합니다.
>3. 숫자로 시작할수 없습니다.
>4. 공백은 입력할수 없습니다.

>예시
>가능: alpha / alpha10 / _alpha 
>불가능 : break(키워드 x) / 273alpha (숫자로 시작x) / has space (공백x)

>자바스크립트에서 식별자를 만드는 관례
>1. 생성자 함수의 이름은 대문자로 시작한다
>2. 변수,함수,속성,메소드의 이름은 소문자로 시작한다
>3. 여러 단어로 된 식별자는 각단어의 시작을 대문자로 한다

#### 1.4 주석

>프로그램 진행에 전혀 영향을 주지않는 코드로 프로그램을 설명할때 주로 사용됩니다

>주석처리방법
<pre>
    <code>
        // single line comment (한줄 주석을 필요러 할때 //을 사용)

        /*
            comment 1   (두줄 이상의 주석을 필요로 할때)
            comment 2   (/**/안에 내용을 넣어서 사용)
        */
    </code>
</pre>

#### 2 출력

> 메세지를 출력하는 기본적인 방법

#### 2.1 출력 메소드

>console.log(" 내용 !!")
>     > 내용 !!
이렇게 출력이 됩니다

#### 2.2 REPL 을 사용한 출력

> 터미널에 NODE를 입력하고 바로 입력하면 바로 출력이됩니다

### 3 기본 자료형

#### 3.1 숫자

>숫자는 이름 그대로 23,567,0,10,12 와같은 것을 의미합니다 출력에서 본 CONSOLE.LOG()를 통하여 생성이 가능합니다

>+,-*,/ 등을 이용해서 사칙연산도 가능하며, %로 몫을 구할수있고 ()우선순위 도 가능합니다
#### 최근내용이 상단에 표시될수있도록 정렬할것
