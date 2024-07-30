const express = require("express");
const dbConnect = require("./config/dbConnect");
const methodOverride = require("method-override"); // PUT, DELETE 함수를 쓰기 위해

const app = express(); // 서버 생성

app.set("view engine", "ejs"); // 뷰에서 사용할 템플릿 엔진 설정
app.set("views","./views"); // 템플릿을 찾는 경로
app.use(express.static("./public")); // 정적파일 경로

app.use(methodOverride("_method"));

dbConnect(); // DB접속

app.listen(3000, () => {
    console.log('서버 실행 중');
});


// 미들웨어 등록(Body Parser)
app.use(express.json()); // json 파싱
app.use(express.urlencoded({extended : true}));

// 라우터 모듈 가져오기
app.use("/contacts",require("./routes/contactRoutes"));


app.get("/", (req,res) => {
    res.send('Hello, Node!');
});

