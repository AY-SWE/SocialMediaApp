/*
    This is our back-end API. It provides all the data services
    our database needs. Note that this file contains the controller
    functions for each endpoint for post
    
    @author Andy Yang
*/

const Post = require('../models/Post')
const User = require('../models/User')
const mongoose = require('mongoose')
//const bcrypt = require("bcryptjs");
//const auth = require("../auth");

createPost = async (req, res) => {
    const body = req.body;
    if (!body) {
        return res.status(400).json({
            errorMessage: 'Improperly formatted request',
        }) 
    }

   
        const newPost = new Post(body);

        try{
            const savedPost = await newPost.save();
            console.log("new post saved: " + newPost._id);
            res.status(200).json(savedPost); 
        }
        catch (err) {
            //console.error(err);
            res.status(500).send(err);
        }
}

updatePost = async (req, res)  => {
    const body = req.body;
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update post',
        })
    }
    const {userId} = req.body;
  
        try{
            const updatedPost = await Post.findById(req.params.id); 
            if(userId === updatedPost.userId){
                await updatedPost.updateOne({$set: req.body}, {new: true})
                //console.log("SUCCESS updated user");
                res.status(200).json(updatedPost);
            }
            else{
                res.status(403).json({errorMessage: "Only the owner can update the post"});
            }
        }
        catch(err){
            res.status(500).send({errorMessage: req.params.id});
        }
}

deletePost = async (req, res) => {
    const {userId} = req.body;
        try{
            const deletedPost = await Post.findById(req.params.id); 
            if(userId === deletedPost.userId){
                await deletedPost.deleteOne()
                res.status(200).json(deletedPost);
            }
            else{
                res.status(403).json({errorMessage: "Only the owner can delete the post"});
            }
        }
        catch(err){
            res.status(500).send(err);
        }
    
}

getPost = async (req, res) => {
    try{ 
        const getPost = await Post.findById(req.params.id); 
        console.log("SUCCESS found post");

        res.status(200).json(getPost);
    }
    catch(err){
        //console.error(err);
        res.status(500).send({errorMessage: "post does not exist"});
    } 
}

likeDislikePost = async (req, res) => {
    const {userId} = req.body;
    try{
        const likePost = await Post.findById(req.params.id); 
        if(!likePost.likes.includes(userId)){       //user is not in the post's like array, so user is able to like it
            await likePost.updateOne({$push: {likes: userId}})
            res.status(200).json("post LIKED " + likePost._id);
        }
        else{
            await likePost.updateOne({$pull: {likes: userId}})
            res.status(200).json("post DISLIKED " + likePost._id);
        }
    }
    catch(err){
        res.status(500).send(err);
    } 
}

//should return posts by users and posts of all those that user has followed
getTimelinePost = async (req, res) => {  
    try{
        const currentUserPosts = await Post.find({userId: req.params.id}); //returns all posts that has same userId as the request's userId
       const followingsPosts = await User.aggregate([
        {
            $match:{_id : new mongoose.Types.ObjectId(req.params.id)}
        },
        {                                                                   //lookup: query is used on User model, and we want to lookup on post model
            $lookup:{
                from : "posts",      //the name of the collection in your database
                localField: "followings",
                foreignField: "userId",
                as: "followingsPosts"
            }
        },
        {
            $project:{
                followingsPosts: 1,
                _id: 0      //by default aggregate returns _id of the field, we dont want it so make it 0
            }
        }
       ])
       res.status(200).json(currentUserPosts.concat(...followingsPosts[0].followingsPosts).sort((a,b)=> {return (b.createdAt-a.createdAt)}));       //this notation returns the posts all in one simple array
    }
    
    catch(err){
        console.log(err);
        res.status(500).send(err);
    } 
}

module.exports = {
    createPost,
    updatePost,
    deletePost,
    getPost,
    likeDislikePost,
    getTimelinePost
};