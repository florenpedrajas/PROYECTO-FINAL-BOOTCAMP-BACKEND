const jwt = require('jsonwebtoken');

const generateSign = (id, email) => {
  return jwt.sign({id, email},"jalnjdgsansld2foalksbd46uaiffdiav1hvfsfhs"); 
}; 

const verifyJwt = (token) => {
  return jwt.verify(token,"jalnjdgsansld2foalksbd46uaiffdiav1hvfsfhs");
};

module.exports = {
  generateSign,
  verifyJwt
}