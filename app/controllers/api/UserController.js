const UserService=require('../../../services/UserService')
const isIncludeInBody=require('../../../utils/controllers/isIncludeInBody')
const User=require('../../../data/models/User')

exports.createUser=async(req,res)=>{

    try {
        const user=new UserService()
        const userSave=await user.createUser(req.body)
        res.status(201).send(userSave)
    } catch (error) {
        res.status(400).send({error:error.message})
    }
}

exports.AllUsers=async(req,res)=>{

    try{
        const users=new UserService()
        const allUsers=await users.getAllUser()

        res.status(200).send(allUsers)
    }catch(error){
        res.status(500).send(error)
    }
}

exports.getUser=async(req,res)=>{

    try {
        res.status(200).send(req.user)
    } catch (error) {
        res.status(500).send()
    }
   
}

exports.login=async(req,res)=>{
    try {
        const user=new UserService()
        const userAuth=await user.login(req.body.email,req.body.password)
        console.log(userAuth)
        res.send({user:userAuth,token:userAuth.token})
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.updateUser=async(req,res)=>{
    try {

    const allowedKeys=["userName","email","password"]
    const isValidated=isIncludeInBody(allowedKeys,req.body)

    if(!isValidated){
        res.status(400).send({error:"Invalid Body"})
    }


      const updateUser=await User.updateOne({_id:req.user._id},req.body)
    
    
    res.send(updateUser)
    } catch (error) {
        res.status(400).send(error)
    }

}

exports.logout=async(req,res)=>{
    try {
        
        req.user.token=undefined
        await req.user.save()
        res.send()
       
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.deleteAccount=async()=>{

}