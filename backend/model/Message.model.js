const mongoose = require('mongoose')

const MessageSchema = mongoose.Schema({
    chatId:{
        type:String
    },
    senderId:{
        type:String
    },
    receiverId:{
        type:String
    },
    text:{
        type:String
    },
    type:{
        type:String
    }},{
        timestamps:true
})

const Message = mongoose.model('Message',MessageSchema)

module.exports={
    Message
}