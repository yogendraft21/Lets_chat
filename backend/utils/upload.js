
const multer = require('multer')
const {GridFsStorage} = require('multer-gridfs-storage')
require('dotenv').config();
const storage = new GridFsStorage({
    url:process.env.URL,
    options:{useUnifiedTopology:true},
    file: (req, file) => {
        const match = ["image/png","image/jpg"];

        if(match.indexOf(file.mimeType === -1)){
            return `${Data.now()}-file-${file.originalname}`
        }
        return{
            bucketName:'photos',
            filename:`${Data.now()}-file-${file.originalname}`
        }
      }
})

const upload = multer({ storage });
module.exports={
    upload
}
