/*
    This is our back-end server, which employs some middleware
    to make sure data is received in the proper format (i.e. JSON)
    and hooks up all of our pieces.
    
    @author Andy Yang
*/
// import express from 'express'
// import bodyParser from 'body-parser'
// THESE ARE NODE APIs WE WISH TO USE
const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const cors = require('cors')        //allows local 3000 to other ports

// CREATE OUR SERVER
dotenv.config()
const PORT = process.env.PORT;
const app = express()    //app is our express object
app.use(bodyParser.json({limit:'30mb', extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors({
    origin: ["http://localhost:3000"],
    credentials: true
}))

//To serve images for public use
app.use(express.static('public'))
app.use('/images',express.static("images"))

// SETUP THE MIDDLEWARE
app.use(express.json())     //in express server, it does not accept json files by default, so use this to resolve it

// SETUP OUR OWN ROUTERS AS MIDDLEWARE
const authRoute = require('./routes/authRoute')
app.use('/auth', authRoute)

const userRoute = require('./routes/userRoute')
app.use('/user', userRoute)

const postRoute = require('./routes/postRoute')
app.use('/post', postRoute)

const uploadRoute = require('./routes/uploadRoute')
app.use('/upload', uploadRoute)

const chatRoute = require('./routes/chatRoute')
app.use('/chat', chatRoute)

const messageRoute = require('./routes/messageRoute')
app.use('/message', messageRoute)


// INITIALIZE OUR DATABASE OBJECT
const db = require('./db')
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// PUT THE SERVER IN LISTENING MODE
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

