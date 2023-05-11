const express = require("express");
const { addUser, getUsers } = require("../controller/User.Controller.js");
const { newConversation, getConversation } = require("../controller/conversation.Controller.js");
const { newMessage, getMessages } = require("../controller/message.controller.js");
const { uploadFile } = require("../controller/Image.Controller.js");
const { upload } = require("../utils/upload.js");


const user = express.Router();
user.post("/add",addUser);
user.get("/users",getUsers);
user.post("/conversation/add",newConversation)
user.post("/conversation/get",getConversation)
user.post("/message/add",newMessage);
user.get("/message/get/:id",getMessages)
user.post("/file/upload",upload.single('file'), uploadFile);

module.exports = user