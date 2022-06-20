//const auth = require("../auth"); //moviesController no need for authentication 
const express = require("express");
const router = express.Router();        // express library's Router method
const chatController = require("../controllers/chatController.js");

//CREATE
router.post("/", chatController.createChat)
//GET ALL CHATS
router.get("/:id", chatController.getAllChats)     //gets all chats for a specific user         //no need for auth.verify because everyone should be able to find
//GET
router.get("/find/:firstId/:secondId", chatController.getChat) //get specific chat between 2 users


module.exports = router;