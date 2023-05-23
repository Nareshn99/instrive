const mongoose=require('mongoose');


const userSchema=new mongoose.Schema({
    Name:{
        type:String,
    },
    Email:{
        type:String,
        unique:true
    },
    Mobile:{
        type:String,
        unique:true
    },
    Address:{
        type:String,
    },
    Country:{
        type:String,
    }
},{timestamps:true});


module.exports=mongoose.model("User",userSchema);