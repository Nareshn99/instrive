const mongoose =require('mongoose');

const connectDb=async()=>{
    try{
        const connect=await mongoose.connect(process.env.MONGO_URL);
        console.log(`mongoDB is connected with ${connect.connection.host}`)
    }
    catch(e){
        console.log(e.message)
    }
}

module.exports=connectDb