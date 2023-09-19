const userSchema=require('../schema/UserSchema')
const mongoose=require('mongoose')


const User=mongoose.model("User",userSchema)

module.exports=User