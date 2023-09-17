const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({

    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        lowercase:true
    },
    userName:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true,
        trim:true,
        minlength:7,
    },
    avatar:{
        type:Buffer
    }
})

module.exports=userSchema

