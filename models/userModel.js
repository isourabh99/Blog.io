const mongoose=require("mongoose")
const plm =require("passport-local-mongoose")
const userSchema=new mongoose.Schema({
    username:String,
    password:String,
    email:String,
    blogs:[{type:mongoose.Schema.Types.ObjectId,ref:"blogs"}],
    profilepic:String,

})
userSchema.plugin(plm)
const userModel=mongoose.model("user",userSchema)
module.exports=userModel