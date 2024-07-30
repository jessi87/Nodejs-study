const express = require("express");
const app = express(); // 서버 생성

const router = express.Router(); // 라우터 생성

app.listen(3000, () => {
    console.log('서버 실행 중');
});

// 미들웨어 등록해줘야함
app.use(router);

app.get("/", (req,res) => {
    res.send('Hello, Node!');
});

// 라우터로 경로 설정 후 get, post 한번에 설정
router.route("/contacts")
    .get((req,res) => {
        res.send('Contacts Page');
    })
    .post((req,res) => {
        res.send('Create Contacts');
    });

// // 전체 연락처 조회
// app.get("/contacts", (req,res) => {
//     res.send('Contacts Page');
// });
// // 새 연락처 등록
// app.post("/contacts", (req,res) => {
//     res.send('Create Contacts');
// });

router.route("/contacts/:id")
    .get((req,res) => {
        res.send(`View Contact for ID : ${req.params.id}`);
    })
    .put((req,res) => {
        res.send(`Update Contact for ID : ${req.params.id}`);
    })
    .delete((req,res) => {
        res.send(`Delete Contact for ID : ${req.params.id}`);
    });


// // 원하는 연락처 조회
// app.get("/contacts/:id", (req,res) => {
//     res.send(`View Contact for ID : ${req.params.id}`)
// });

// // 연락처 수정
// app.put("/contacts/:id", (req,res) => {
//     res.send(`Update Contact for ID : ${req.params.id}`)
// });

// // 연락처 삭제
// app.delete("/contacts/:id", (req,res) => {
//     res.send(`Delete Contact for ID : ${req.params.id}`)
// });