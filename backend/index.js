const express = require('express');
const  connection  = require('./config/db');
const user = require('./routes/User.route');

const app = express();
app.use(express.json())

const cors = require('cors');
app.use(cors({
    origin:'*'
}))

app.get("/",(req,res)=>{
    res.send("WhatsApp")
})

app.use("/",user);
connection();
app.listen(8081,()=>{
    console.log("Server is Running");
})