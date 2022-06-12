const mongoose = require('mongoose')
const Schema = mongoose.Schema
/*
    This is where we specify the format of the data we're going to put into
    the database.
    
    @author Andy Yang
*/
const UserSchema = new Schema(
    {
        username: { type: String, required: true, unique:true },
        password: { type: String, required: true },
        firstname: { type: String, required: true },
        lastname: { type: String, required: true },
        profilePic: { type: String, default: "" },
        coverPic: { type: String, default: "" },
        about: { type: String, default: "" },
        livesIn: { type: String, default: "" },
        worksAt: { type: String, default: "" },
        relationship: { type: String, default: "" },
        isAdmin: { type: Boolean, default: false },
    },
    { timestamps: true },
)

module.exports = mongoose.model('User', UserSchema)
