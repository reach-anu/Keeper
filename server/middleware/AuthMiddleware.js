const jwt=require('jsonwebtoken')
const registerModel = require('../models/registerModel.js');

const verifyToken = async (req,res,next) =>{
    const header = req.headers[`authorization`];
    const token= header.split(' ')[1];
    if(!token)
    {
        return res.status(400).json({message:"no token found"});
    }
    jwt.verify(String(token),process.env.JWT_SECRET_KEY, (err,user) =>{
        if(err)
        {
            return res.status(400).json({message:"Invalid Token"});
        }
            req.id=user.id;
    });
    next();
}

const getUser = async (req,res) => {
    const Userid=req.id;
    let check;
    try{
        check = await registerModel.findById(Userid,"-password");
    }
    catch (err){
        return res.status(500).json({message: "internal error"})
    }
    if(!check)
    {
        return res.status(404).json({message: "User not Found"});
    }
        return res.status(200).json({message: "User Found",check});
}


module.exports = {verifyToken,getUser}