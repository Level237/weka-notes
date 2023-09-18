const UserService=require('../../services/UserService')


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
        const userNew=new UserService()
        const user=await userNew.getUser(req.params.id)

        if(!user){
            res.status(404).send("User not found")
        }
        res.status(200).send(user)
    } catch (error) {
        res.status(500).send()
    }
   
}

exports.login=async(req,res)=>{
    try {
        const user=new UserService()
        const userAuth=await user.login(req.body.email,req.body.password)

        res.send(userAuth)
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.updateUser=async(req,res)=>{

}