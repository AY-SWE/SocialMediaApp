
/*
    This is our back-end API. It provides all the data services
    our database needs. Note that this file contains the controller
    functions for each endpoint for users
    
    @author Andy Yang
*/

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
    const {password, currentUserId, currentUserAdminStatus} = req.body;
    if(currentUserId === req.params.id || currentUserAdminStatus){

        if(password){       //password is also in req.body, means user also wants to update password
            const saltRounds = 10;
            const salt = await bcrypt.genSalt(saltRounds);
            req.body.password = await bcrypt.hash(password, salt);      //need to use req.body.password, or else type error :Assignment to constant variable.
        }

        try{
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true}); //update first, then return new user updated info 
            console.log("SUCCESS updated user");
            res.status(200).json(updatedUser);
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

getAllUser = async (req, res) => {
    const query = req.query.new;
    if(req.user.isAdmin){
        try{
            const allUsers = query? await User.find().limit(10): await User.find(); //if query, return last 10, else return all user
            console.log("SUCCESS all users");
            res.status(200).json(allUsers);
        }
        catch(err){
            console.error(err);
            res.status(500).send();
        }
    }
    else{
        res.status(403).json({errorMessage: "You're not allowed to see all users"});
    }
}

module.exports = {
    getUser,
    updateUser,
    deleteUser,
    getAllUser,
};