// 응답 객체 확인하기 - 응답 헤더, 응답 본문, 응답 종료  (결과 비교 파일 : 04\results\server-3.js)
const http = require("http");

const server = http.createServer((req, res) => {
    res.setHeader("Content-type","text/plain"); // 응답 헤더
    res.write("Hello Node"); // 브라우저 화면에 출력
    res.end(); // 응답 종료
});

// 3000 포트로 요청 받음
server.listen(3000, () => {
    console.log("서버 실행 중");
});
