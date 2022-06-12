const mongoose = require('mongoose')
/*
    This initializes the connection to our database so that we can do CRUD.
    
    @author Andy Yang
*/

const dotenv = require("dotenv")
dotenv.config()

mongoose
    .connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology:true })
    .then(() => console.log("DB connection SUCCESS")).catch(e => {
        console.error('Connection error', e.message)
    })


const db = mongoose.connection

module.exports = db

