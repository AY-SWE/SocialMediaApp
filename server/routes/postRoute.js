//const auth = require("../auth"); //moviesController no need for authentication 
const express = require("express");
const router = express.Router();        // express library's Router method
const postController = require("../controllers/postController.js");

//CREATE
router.post("/", postController.createPost)
// //UPDATE
// router.put("/:id", auth.verify, movieController.updateMovie)
// //DELETE
// router.delete("/:id", auth.verify, movieController.deleteMovie)

// //GET
// router.get("/find/:id", movieController.getMovie)          //no need for auth.verify because everyone should be able to find
// //GET RANDOM
// router.get("/findRandom", auth.verify, movieController.getMovieRandom) 
// //GET ALL
// router.get("/", auth.verify, movieController.getAllMovie) 

module.exports = router;