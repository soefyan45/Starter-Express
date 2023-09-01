const jwt = require('jsonwebtoken');
require("dotenv").config();
// const {TOKEN_SECRET} = process.env
// const createToken = require('../controllers/makeTokenController')
const token = '0757624bdcfe1c540eb0a5f0c6658c365068e6a5fee93163ac03c04ca8c90b5292662b573f7803d31100f64388d07170970265c9405e046acaef25adcddec510'
const buatToken=async()=>{
    let namaAgent   = 'web-service'
    let role        = ['web']
    let dataToken   = {nama:namaAgent,role}
    let generateToken = jwt.sign({dataToken}, token)
    console.log(generateToken)
}
buatToken()