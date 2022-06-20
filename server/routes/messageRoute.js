//const auth = require("../auth"); //moviesController no need for authentication 
const express = require("express");
const router = express.Router();        // express library's Router method
const messageController = require("../controllers/messageController.js");

//ADD MESSAGE
router.post("/", messageController.createMessage)
//GET ALL MESSAGES OF A CHAT
router.get("/:chatId", messageController.getMessages)     //get messages of a given chat id


module.exports = router;