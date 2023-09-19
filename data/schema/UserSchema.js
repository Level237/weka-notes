const mongoose=require("mongoose")
const isEmail=require('../../utils/schema/validators/isEmail')
const bcryptjs=require('bcryptjs')
const uniqueValidator=require('mongoose-unique-validator')
const jwt=require('jsonwebtoken')


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
        type:String,
    },
    active:{
        type:Boolean,
        default:true
    },
    avatar:{
        type:Buffer
    }
})

userSchema.methods.generateAuthToken=async function(){
    const user=this;
    const token=jwt.sign({_id:user._id},process.env.JWT_SECRET)
    user.token=token
console.log(user);
    await user.save()

    return token;
}

userSchema.plugin(uniqueValidator, { message: 'Error, expected {PATH} to be unique.' });
userSchema.pre('save',async function(next){
    const user=this;
    if(user.isModified("password")){
        user.password=await bcryptjs.hash(user.password,10)
        
    }
    

    next()
})

userSchema.methods.toJSON=function(){
    const user=this;
    const userObject=user.toObject();

    delete userObject.token;
    delete userObject.password;

    return userObject;
}





module.exports=userSchema

