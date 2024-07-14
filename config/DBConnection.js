const mongoose=require("mongoose")
exports.connectionDB=async()=>{
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log(`Blog Database connected to ${mongoose.connection.host}`);
    }).catch((error)=>{
        console.log(error.message);
    })
}
