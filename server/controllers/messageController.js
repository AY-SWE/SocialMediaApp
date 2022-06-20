/*
    This is our back-end API. It provides all the data services
    our database needs. Note that this file contains the controller
    functions for each endpoint for message
    
    @author Andy Yang
*/

const Message = require('../models/Message')
const mongoose = require('mongoose')
//const bcrypt = require("bcryptjs");
//const auth = require("../auth");

createMessage = async (req, res) => {
    const body = req.body;
    if (!body) {
        return res.status(400).json({
            errorMessage: 'Improperly formatted request',
        }) 
    }
        const newMessage = new Message(body);

        try{
            const savedMessage = await newMessage.save();
            console.log("new message instance saved: " + savedMessage._id);
            res.status(200).json(savedMessage); 
        }
        catch (err) {
            console.error(err);
            res.status(500).send(err);
        }
}

getMessages = async (req, res) => {
    const {chatId} = req.params;
    try{ 
        const messages = await Message.find({chatId});
        console.log("SUCCESS found messages for given chatId: ");
        res.status(200).json(messages);
    }
    catch(err){
        //console.error(err);
        res.status(500).send({errorMessage: "No messages found for given chatId"});
    } 
}

module.exports = {
    createMessage,
    getMessages,
};