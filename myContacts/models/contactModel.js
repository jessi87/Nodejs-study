const mongoose = require("mongoose");

// 스키마 생성
const contactSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String
    },
    phone : {
        type : String,
        required : [true, "전화번호는 필수입니다."]
    }
},
{
    timestamps : true // 생성 시간 기록
})

// 스키마 -> 모델
// mongoose.model(모델명, 스키마명)
const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;