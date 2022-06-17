
const express = require("express");
const multer = require("multer");
const router = express.Router();        // express library's Router method

const storage = multer.diskStorage({        //public folder in server
    destination:(req, file, cb) => {
        cb(null, "public/images");
    },
    filename:(req,file,cb)=>{
        cb(null, req.body.name);
    }
});

const upload = multer({storage: storage})

// //REGISTER
router.post("/", upload.single("file",(req,res)=>{
    try{
        return res.status(200).json({
            success: true,
            message: "file upload successfully"
          })
    }
    catch(err){
        console.log(err);
    }
}));

module.exports = router;