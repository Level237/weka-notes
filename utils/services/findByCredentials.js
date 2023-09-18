const User=require('../../data/models/User')
const bcryptjs=require('bcryptjs')
const findByCredentials=async(email,password)=>{
    const user=await User.findOne({email})
    
        if(!user){
            throw new Error("Unable to login")
        }
    
        const isMatch=await bcryptjs.compare(password,user.password)
    
        if(!isMatch){
            throw new Error("Unable to login")
        }
    
        return user;
}

module.exports=findByCredentials