const mongoose = require('mongoose')
const Schema = mongoose.Schema
/*
    This is where we specify the format of the data we're going to put into
    the database.
    
    @author Andy Yang
*/
const PostSchema = new Schema(
    {
        userId: { type: String, required: true},
        description: { type: String, required: true },
        createdBy: { type: String, required: true },
        img: { type: String},
        likes: []
    },
    { timestamps: true },
)

module.exports = mongoose.model('Post', PostSchema)
