const mongoose = require("mongoose");
require("dotenv").config();

// async, await (비동기처리)
const dbConnect = async() => {
    try {
        // DB 연결(.env에서 DB_CONNECT 가져오기)
        // await : DB연결에 시간이 걸려도 연결 후 뒤 문장 실행
        const connect = await mongoose.connect(process.env.DB_CONNECT);
        console.log("DB Connected")
    } catch (err) {
        console.log(err)
    }
}

module.exports = dbConnect;