require("dotenv").config();
const appIndex=async (req,res)=>{
	return res.status(200).json({
		success : true,
		msg     : 'apps Running',
	})
}
module.exports = {
    appIndex
}