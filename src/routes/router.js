const express=require('express');
const upload = require('../middlewares/upload');
const { uploadFile, getUsers } = require('../controllers/userController');

const router=express.Router();

//Read user data from xlsheet and add on mongodb
router.post("/upload-file",upload.single("file"),uploadFile)

//get user data from mongodb
router.get("/get-users",getUsers)



module.exports= router