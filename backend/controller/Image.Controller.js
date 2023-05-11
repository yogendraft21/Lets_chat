
const uploadFile = async(req,res)=>{
    if(!req.file){
        return res.status(500).json('File not found')
    }
    // const imageURL = 
}
module.exports={
    uploadFile
}