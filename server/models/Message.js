const mongoose = require('mongoose')
const Schema = mongoose.Schema
/*
    This is where we specify the format of a single message for Chat that we're going to put into
    the database.
    
    @author Andy Yang
*/
const MessageSchema = new Schema(
    {
        chatId: { type: String},
        senderId: {type: String},
        text:  {type: String}
    },
    { timestamps: true },
)

module.exports = mongoose.model('Message', MessageSchema)
