// fs 모듈의 readdir 함수 연습하기 ( 결과 비교 파일 : 03\results\list-2.js)
const fs = require("fs");

// 비동기 함수로 콜백함수를 사용
fs.readdir("./", (err,files) => { // 같은 폴더에 있는 파일들 출력
    if(err){ // 에러가 발생하면 에러메시지 출력
        console.log(err);
    }
    console.log(files);
})