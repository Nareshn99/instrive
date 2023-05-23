const express=require('express');
const upload = require('../middlewares/upload');
const { uploadFile, getUsers } = require('../controllers/userController');

const router=express.Router();

router.get("/test",(req,res)=>{
    res.send({msg:"api running"})
})

router.post("/upload-file",upload.single("file"),uploadFile)

router.get("/get-users",getUsers)

module.exports= router