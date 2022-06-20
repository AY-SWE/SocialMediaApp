/*
    This is our back-end API. It provides all the data services
    our database needs. Note that this file contains the controller
    functions for each endpoint for chat
    
    @author Andy Yang
*/

const Chat = require('../models/Chat')
const mongoose = require('mongoose')
//const bcrypt = require("bcryptjs");
//const auth = require("../auth");

createChat = async (req, res) => {
    const body = req.body;
    if (!body) {
        return res.status(400).json({
            errorMessage: 'Improperly formatted request',
        }) 
    }

        const newChat = new Chat({members: [req.body.senderId, req.body.receiverId]});

        try{
            const savedChat = await newChat.save();
            console.log("new chat instance saved: " + savedChat._id);
            res.status(200).json(savedChat); 
        }
        catch (err) {
            //console.error(err);
            res.status(500).send(err);
        }
}

getAllChats = async (req, res) => {
    try{ 
        const getAllChats = await Chat.find({members: {$in: [req.params.id]}}); 
        console.log("SUCCESS found all chats for a specific user: ");
        res.status(200).json(getAllChats);
    }
    catch(err){
        //console.error(err);
        res.status(500).send({errorMessage: "No chat exist for given user"});
    } 
}

getChat = async (req, res) => {
    try{ 
        const chat = await Chat.findOne({
            members: {$all: [req.params.firstId, req.params.secondId]}
        })
        console.log("SUCCESS found chat for the two users: ");
        res.status(200).json(chat);
    }
    catch(err){
        //console.error(err);
        res.status(500).send({errorMessage: "No chat exist between the 2 speciifed users"});
    } 
}

module.exports = {
    createChat,
    getAllChats,
    getChat
};