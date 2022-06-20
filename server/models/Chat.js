const mongoose = require('mongoose')
const Schema = mongoose.Schema
/*
    This is where we specify the format of the data we're going to put into
    the database.
    
    @author Andy Yang
*/
const ChatSchema = new Schema(
    {
        members: { type: Array},
    },
    { timestamps: true },
)

module.exports = mongoose.model('Chat', ChatSchema)
