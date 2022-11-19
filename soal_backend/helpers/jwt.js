const jwt = require("jsonwebtoken");

const jwt_secret = 'inirahasia'

const signToken = (payload) => jwt.sign(payload, jwt_secret);
const verifyToken = (token) => jwt.verify(token, jwt_secret);

module.exports = { signToken, verifyToken };
