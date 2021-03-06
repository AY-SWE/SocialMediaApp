
//const auth = require("../auth");
const express = require("express");
const router = express.Router();        // express library's Router method
const auth = require('../auth')
const userController = require("../controllers/userController");

//UPDATE
router.put("/:id", userController.updateUser)
//DELETE
router.delete("/:id", userController.deleteUser)
//GET
router.get("/find/:id", userController.getUser)          //no need for auth.verify because everyone should be able to find
//FOLLOW A USER
router.put("/follow/:id", userController.followUser) 
//UNFOLLOW A USER
router.put("/unfollow/:id", userController.unfollowUser) 
//GET ALL
router.get("/", userController.getAllUser) 
// //GET USER STATS
// router.get("/stats", userController.getUserStats) 

module.exports = router;