const jwt = require('jsonwebtoken');
require("dotenv").config();
verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)
    let {TOKEN_SECRET} = process.env
    jwt.verify(token, TOKEN_SECRET, async(err, decoded) => {
        if (err) {
            return res.status(500).json({
                auth: false,
                message: "Error",
                errors: err
            });
        }
        next();
    });
};
checkRoleAdmin = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)
    let {TOKEN_SECRET} = process.env
    jwt.verify(token, TOKEN_SECRET, async(err, decoded) => {
        // console.log(decoded.dataToken.user.role)
        if (err) {
            return res.status(500).json({
                auth: false,
                message: "Error",
                errors: err
            });
        }
        if (decoded.dataToken.user.role == 'admin') {
            next();
        }else{
            return res.status(500).json({
                auth: false,
                message: "Error",
                errors: 'Not allowed'
            });
        }
    });
};
logOut =async (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    console.log(token)
    res.clearCookie('nToken');
    return res.json({success: true, message: 'Logout success'});
}
const authJwt = {
    verifyToken     : verifyToken,
    checkRoleAdmin  : checkRoleAdmin,
    logOut          : logOut
};
module.exports = authJwt;