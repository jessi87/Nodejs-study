// fs 모듈의 readFile 함수 연습하기 (결과 비교 파일은 03\results\read-3.js)
const fs = require("fs");

// encoding을 지정해서 txt내용 읽기
fs.readFile("./example.txt","utf-8",(err, data) => {
    if(err){
        console.log(err);
    }
    // console.log(data);
    // test.txt에 내용을 저장하고 생성
    fs.writeFile("./test.txt", data, (err) => {
        if(err){
            console.log(err);
        }
        console.log('test.txt is saved.');
    })
})