const { conversation } = require("../model/Conversation.model");

const newConversation = async(req,res)=>{
    try {
        const senderId = req.body.senderId;
        const receiverId = req.body.receiverId;
        // console.log(req.body);
        const exist = await conversation.findOne({members:{$all:[receiverId,senderId]}});
        // console.log(exist);

        if(exist){
            return res.status(200).json('Conversation already exists')
        }
        const newConversation = new conversation({
            members:[senderId,receiverId]
        })
        // console.log(newConversation);
        await newConversation.save();
        return res.status(200).json("Conversation saved Succesfully")
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

const getConversation = async(req,res)=>{
    const senderId = req.body.senderId;
        const receiverId = req.body.receiverId;
    try {
        let chat = await conversation.findOne({members:{$all :[receiverId,senderId]}})
        return res.status(200).json(chat)
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

module.exports={
    newConversation,
    getConversation
}