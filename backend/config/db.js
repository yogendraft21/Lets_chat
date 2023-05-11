const mongoose = require('mongoose')
require('dotenv').config()

const connection = async()=>{
    try {
        await mongoose.connect(process.env.URL)
        console.log('DB Conneted Successfully');
    } catch (error) {
        console.log("Error in DB",error.message);
    }
}
module.exports = connection
