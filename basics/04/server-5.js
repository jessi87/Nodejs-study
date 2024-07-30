// 라우팅 연습하기  (결과 비교 파일 : 04\results\server-5.js)
const http = require("http");

const server = http.createServer((req, res) => {
    // req.url : 요청 경로
    // req.method : 요청 방식
    const {url, method} = req; // const url = req.url; const method = req.method;

    res.setHeader("Content-type","text/plain"); // 응답 헤더

    // 자바에서 requestMapping 같은거 
    if(method === "GET" && url==="/home"){
        res.write("HOME");
        res.end();
    } else if(method === "GET" && url==="/about"){
        res.end("ABOUT"); // write + end
    } else res.end("Not Found");
    
});

// 3000 포트로 요청 받음
server.listen(3000, () => {
    console.log("서버 실행 중");
});
