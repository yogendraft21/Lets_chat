const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    iss:{
        type:String,
    },
    nbf:{
        type:Number,
    },
    aud:{
        type:String
    },
    sub:{
        type:String,
        required:true
    },
    email:{
        type:String
    },
    email_verfied:{
        type:Boolean
    },
    azp:{
        type:String
    },
    name:{
        type:String,
        required:true
    },
    picture:{
        type:String,
        required:true
    }
})

const User = mongoose.model('user',UserSchema)

module.exports = User