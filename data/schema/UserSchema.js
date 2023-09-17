const mongoose=require("mongoose")
const isEmail=require('../../utils/schema/isEmail')
const bcryptjs=require('bcryptjs')
const uniqueValidator=require('mongoose-unique-validator')
const userSchema=new mongoose.Schema({

    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        lowercase:true,
        validate(value){
            isEmail(value)
        }
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
    token:{
        type:String
    },
    avatar:{
        type:Buffer
    }
})

userSchema.plugin(uniqueValidator, { message: 'Error, expected {PATH} to be unique.' });
userSchema.pre('save',async function(next){
    const user=this;
    if(user.isModified("password")){
        user.password=await bcryptjs.hash(user.password,10)
    }

    next()
})

module.exports=userSchema

