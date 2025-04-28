const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const handleRegister = async (req, res) => {
  const { username, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashedPassword });
    await user.save();
    return res.status(201).json({
      msg: "User Registered Successfully"
    });
  } catch (error) {
    console.log(`error inside register post: ${error.message}`);
    return res.status(500).json({
      msg: "Internal Server Error"
    });
  }
};

const handleLogin = async (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);
  try{
    const user = await User.findOne({ username });
    if(!user){
      return res.status(401).json({
        msg: "Invalid Username or Password"
      });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if(!passwordMatch){
      return res.status(401).json({
        msg: "Invalid Username or Password"
      });
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });
    return res.status(200).json({
      msg: "Login Successful",
      token
    });
  }catch(e){
    console.log(`error inside login post: ${e.message}`);
    return res.status(500).json({
      msg: "Internal Server Error"
    });
  }
};

module.exports = {
  handleLogin,
  handleRegister
};