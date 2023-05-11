
const { conversation } = require('../model/Conversation.model');
const {Message} = require('../model/Message.model')
const newMessage = async(req,res)=>{
    try {
        const newmessage = new Message(req.body);
        await newmessage.save();
        await conversation.findByIdAndUpdate(req.body.chatId,{message:req.body.text})
        return res.status(200).json("Message send Success")
    } catch (error) {
        
    }
}

const getMessages = async(req,res)=>{
    try {
        const messages = await Message.find({chatId:req.params.id})
        return res.status(200).json(messages)
    } catch (error) {
        return res.status(500).json(error.message)
    }
}


module.exports={
    newMessage,
    getMessages
}