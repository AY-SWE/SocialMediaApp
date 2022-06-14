//const auth = require("../auth"); //moviesController no need for authentication 
const express = require("express");
const router = express.Router();        // express library's Router method
const postController = require("../controllers/postController.js");

//CREATE
router.post("/", postController.createPost)
//UPDATE
router.put("/:id", postController.updatePost)
//DELETE
router.delete("/:id", postController.deletePost)
//GET
router.get("/find/:id", postController.getPost)          //no need for auth.verify because everyone should be able to find
//LIKE/DISLIKE POST
router.put("/likeDislike/:id", postController.likeDislikePost)
//GET TIMELINE POST
router.put("/findTimeLine/:id", postController.getTimelinePost)

module.exports = router;