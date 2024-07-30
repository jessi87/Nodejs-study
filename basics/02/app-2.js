// 2개 이상의 변수를 가져오기
const {user1, user2} = require("./users-1");
const hello = require("./hello");

hello(user1);
hello(user2);