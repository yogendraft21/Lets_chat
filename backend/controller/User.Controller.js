const { response } = require("express")
const User = require("../model/User.model")

const addUser = async(req,res)=>{
    try {
        const user = await User.findOne({sub : req.body.sub})     
        
        if(user){
            return res.status(200).json({msg:"User Already Exist"})
        }
        const newUser = new User(req.body);
        await newUser.save();
        return res.status(200).json(newUser)
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

const getUsers = async(req,res)=>{
    try {
        const data = await User.find();

        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

module.exports = {
    addUser,
    getUsers
}