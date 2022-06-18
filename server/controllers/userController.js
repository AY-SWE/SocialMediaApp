
/*
    This is our back-end API. It provides all the data services
    our database needs. Note that this file contains the controller
    functions for each endpoint for users
    
    @author Andy Yang
*/
const auth = require('../auth')
const User = require('../models/User')
const bcrypt = require("bcryptjs");

updateUser = async (req, res)  => {
    const body = req.body;
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update user',
        })
    }
    const {password, _id} = req.body;
    if(_id === req.params.id){

        if(password){       //password is also in req.body, means user also wants to update password
            const saltRounds = 10;
            const salt = await bcrypt.genSalt(saltRounds);
            req.body.password = await bcrypt.hash(password, salt);      //need to use req.body.password, or else type error :Assignment to constant variable.
        }

        try{
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true}); //update first, then return new user updated info 
            console.log("SUCCESS updated user");
             // LOGIN THE USER
            const token = auth.signToken(updatedUser.username, updatedUser._id);
            res.status(200).json({
                success: true,
                user: {updatedUser},
                token:{token}
              })
        }
        catch(err){
            res.status(500).send({errorMessage: req.params.id});
        }
    }
    else{
        res.status(403).json({errorMessage: "You can only update your account"});
    }
}


deleteUser = async (req, res) => {
    const {currentUserId, currentUserAdminStatus} = req.body;
    if(currentUserId === req.params.id || currentUserAdminStatus){
        
        try{
            const deletedUser = await User.findByIdAndDelete(req.params.id); 
            res.status(200).json("user has been deleted: " + deletedUser.username);
        }
        catch(err){
            console.error(err);
            res.status(500).send();
        }
    }
    else{
        res.status(403).json({errorMessage: "You can only delete your account"});
    }
}

getUser = async (req, res) => {
    try{ 
        //var id = new mongoose.Types.ObjectId(req.params.id)
        const getUser = await User.findById(req.params.id); 
        console.log("SUCCESS found user");
        const {password, ...info} = getUser._doc;

        res.status(200).json(info);
    }
    catch(err){
        //console.error(err);
        res.status(500).send({errorMessage: "user does not exist"});
    } 
}

followUser = async (req, res) => {
    const {currentUserId} = req.body;   
    if(currentUserId === req.params.id){        //no one should be able to follow themselves
        res.status(403).json({errorMessage: "User cannot follow him/herself"});
    }
    else{
        try{
            const followUser = await User.findById(req.params.id); //followUser is whom we want to follow
            const followingUser = await User.findById(currentUserId);       //the one who is performing the following request to followUser
            if(!followingUser.followings.includes(req.params.id)){
                await followingUser.updateOne({$push: {followings: req.params.id}})
                await followUser.updateOne({$push: {followers: currentUserId}})
                res.status(200).json("desired User has been followed: " + followUser.username);
            }
            else{
                res.status(403).json({errorMessage: "You are already following the specified user"});
            }
        }
        catch(err){
            res.status(500).send(err);
        }
    }
}

getAllUser = async (req, res) => {
        try{
            let allUsers = await User.find(); //if query, return last 10, else return all user
            console.log("SUCCESS all users");
            allUsers = allUsers.map((user)=> {
                const {password,...otherInfo} = user._doc;
                return otherInfo;
            })
            res.status(200).json(allUsers);
        }
        catch(err){
            console.error(err);
            res.status(500).send(err);
        }
}

unfollowUser = async (req, res) => {
    const {currentUserId} = req.body;   
    if(currentUserId === req.params.id){        //no one should be able to unfollow themselves
        res.status(403).json({errorMessage: "User cannot unfollow him/herself"});
    }
    else{
        try{
            const unfollowUser = await User.findById(req.params.id); //unfollowUser is whom we want to unfollow
            const unfollowingUser = await User.findById(currentUserId);       //the one who is performing the unfollowing request to unfollowUser
            if(unfollowingUser.followings.includes(req.params.id)){     //if user's following array contains the desired user to unfollow, then proceed
                await unfollowingUser.updateOne({$pull: {followings: req.params.id}})
                await unfollowUser.updateOne({$pull: {followers: currentUserId}})
                res.status(200).json("desired User has been UNfollowed: " + unfollowUser.username);
            }
            else{
                res.status(403).json({errorMessage: "The specified user is not followed by you to begin with"});
            }
        }
        catch(err){
            res.status(500).send(err);
        }
    }
}

module.exports = {
    getUser,
    updateUser,
    deleteUser,
    getAllUser,
    followUser,
    unfollowUser
};