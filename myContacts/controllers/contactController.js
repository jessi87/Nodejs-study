/**
 * Router에서 .get(), .post() 함수 안에 구현하던 걸
 * controller로 기능을 분리함
 */

const asyncHandler = require("express-async-handler"); // npm i express-async-handler
const Contact = require("../models/contactModel") // 생성한 모델 import

// 모든 연락처 가져오기
// GET /contacts
// async-handler 사용하면 try-catch로 에러 처리할 필요 없음
const getAllContacts = asyncHandler(async(req,res) => {
    // DB에서 연락처 조회
    const contacts = await Contact.find();
    res.render("index", {contacts: contacts});

    // res.send(contacts); // 웹 페이지에 값 출력
    // const users = [
    //     {name: "Kim", email: "kim@naver.com", phone: "010123"},
    //     {name: "Lee", email: "lee@naver.com", phone: "010456"}
    // ]
    // res.render("getAll", {users: users}); // 뷰 연결 (getAll.ejs)
});

// 연락처 추가 폼 불러오기
// GET /contacts/add
const addContactForm = (req,res) => {
    res.render("add");
}


// 새로운 연락처 생성
// POST /contacts/add
const createContact = asyncHandler(async(req,res) => {
    console.log(req.body);
    const {name, email, phone} = req.body;
    if(!name || !email || !phone){
        return res.send('필수 값이 입력되지 않음');
    }

    // mongoDB에 저장
    const contact = await Contact.create({
        name, email, phone
    });
    res.send('Create Contact');
})



// 연락처 가져오기
// GET /contacts/:id
const getContact = asyncHandler(async(req,res) => {
    // DB에서 아이디로 정보 조회
    const contact = await Contact.findById(req.params.id);
    // res.send(`View Contact for ID : ${req.params.id}`);
    res.render("update",{contact: contact});
});

// 연락처 변경하기
// PUT /contacts/:id
const updateContact = asyncHandler(async(req,res) => {
    // res.send(`Update Contact for ID : ${req.params.id}`);
    const id = req.params.id;
    const {name, email, phone} = req.body;
    // DB에서 id로 정보 조회
    const contact = await Contact.findById(id);
    if(!contact){
        throw new Error("Contact not found");
    }
    // 새로운 내용으로 변경
    contact.name = name;
    contact.email = email;
    contact.phone = phone;

    // 변경내용 저장
    contact.save();
    res.redirect("/contacts") // 강제로 페이지 바꾸기(목록으로)
    // res.json(contact); //json형식으로 출력
});

// 연락처 삭제하기
// DELETE /contacts/:id
const deleteContact = asyncHandler(async(req,res) => {
    // res.send(`Delete Contact for ID : ${req.params.id}`);

    const id = req.params.id;
    await Contact.findByIdAndDelete(id); // DB에서 찾아서 삭제
    res.redirect("/contacts");

    // // DB에서 id로 정보 조회
    // const contact = await Contact.findById(id);
    // if(!contact){
    //     throw new Error("Contact not found");
    // }

    // // DB에서 해당 정보 삭제
    // await Contact.deleteOne();
    // res.send("Deleted");
});

module.exports = {
    getAllContacts, 
    createContact,
    getContact,
    updateContact,
    deleteContact,
    addContactForm
};