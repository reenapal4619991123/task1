const mongoose=require("mongoose");
const plm=require("passport-local-mongoose");
const userModel=new mongoose.Schema({
    name:String,
    username:String,
    email:String,
    password:String,
    about:String,
    avatar:{
        type:String,
        default:"",
    },
});
userModel.plugin(plm);
const  user=mongoose.model("user",userModel);
module.exports=user;