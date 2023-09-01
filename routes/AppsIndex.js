const express = require("express");
const router = express.Router();
const app = require('../controllers/app')
const { authJwt } = require("../middleware");
router.route('/').get(app.appIndex)
// router.put('/:id',async(req,res,next)=>{
//     const id = req.params.id
//     res.json(id)
// })
module.exports = router;