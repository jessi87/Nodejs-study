const express = require("express");
const router = express.Router(); // 라우터 생성
const {
    getAllContacts, 
    createContact,
    getContact,
    updateContact,
    deleteContact,
    addContactForm
} = require("../controllers/contactController");


// controller 사용
router.route("/").get(getAllContacts);

router.route("/add").get(addContactForm).post(createContact);

router.route("/:id")
    .get(getContact)
    .put(updateContact)
    .delete(deleteContact);

// 모듈 생성    
module.exports = router; 