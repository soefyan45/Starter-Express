require("dotenv").config();
const jwt = require('jsonwebtoken');
const {TOKEN_SECRET} = process.env
const makingToken=async (data)=>{
    // let generateToken = jwt.sign({data}, TOKEN_SECRET, { expiresIn: '1800s' })
    let generateToken = jwt.sign({data}, TOKEN_SECRET)
    return generateToken;
}
const makingSecretToken=async()=>{
    return require('crypto').randomBytes(64).toString('hex')
}
module.exports = {
    makingToken,makingSecretToken
}