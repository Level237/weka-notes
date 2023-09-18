const userSchema=require('../schema/UserSchema')
const mongoose=require('mongoose')
const mongodb=require('mongodb')

const User=mongoose.model("User",userSchema)

module.exports=User