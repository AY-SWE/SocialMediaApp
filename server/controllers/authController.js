
/*
    This is our back-end API. It provides all the data services
    our database needs. Note that this file contains the controller
    functions for each endpoint for register/login.
    
    @author Andy Yang
*/

const User = require('../models/User')
const bcrypt = require('bcryptjs')

//Register a new User
registerUser = async (req, res) => {
  try{
    const {username} = req.body
    const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  const passwordHash = await bcrypt.hash(req.body.password, salt);
  req.body.password = passwordHash;

  const existingUser = await User.findOne({ username: username });
    if (existingUser) {
      return res.status(400).json({
              success: false,
              errorMessage: "An account with this username already exists."
          })
    }
      const newUser = new User(req.body);
      const savedUser = await newUser.save();     //mongoose will save user into our db
    
    res.status(200).json({
        success: true,
        user: {savedUser}
      })
  }
  catch (err) {
      console.error(err);
      res.status(500).send();
  }
}


loginUser = async (req, res) => {
  try{
    const { username, password} = req.body;
    const existingUser = await User.findOne({ username: username });
    if (!existingUser) {
      return res
          .status(401)
          .json({
              errorMessage: "No username found."
          })
    }
    const passwordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!passwordCorrect) {
      return res.status(401).json({
        success: false,
        errorMessage: "Wrong password",
      });
    }

    res.status(200).json({existingUser})
  }
  catch (err) {
      console.error(err);
      res.status(500).send();
    }
}

module.exports = {
    registerUser,
    loginUser
};
