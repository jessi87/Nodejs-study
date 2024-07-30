// path 모듈 연습하기 ( 결과 비교 파일 : 03\results\path.js)
const path = require("path");

// join - 여러개의 텍스트를 하나의 경로로
const fullPath = path.join('some','work','ex.txt');
console.log(fullPath);

// dirname - 경로만 추출
const dir = path.dirname(fullPath);
console.log(dir);

// basename - 파일이름만 추출
const fn1 = path.basename(__filename);
console.log(fn1);

const fn2 = path.basename(__filename, '.js'); // 확장자 제외
console.log(fn2);