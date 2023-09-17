const UserService=require('../../services/UserService')


exports.createUser=async(req,res)=>{

    try {
        const user=new UserService()
        const userSave=await user.createUser(req.body)
        console.log(req.body);
        res.status(201).send(userSave)
    } catch (error) {
        res.status(400).send(error.message)
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

exports.updateUser=async(req,res)=>{

}