const jwt = require('jsonwebtoken');
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if(!token){
    return res.status(401).json({
      msg: "No token provided"
    });
  }

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
    if(err) return res.status(401).json({
      msg: "Invalid Token"
    });
    req.user = user;
    next();
  });
};

module.exports = authenticateToken;