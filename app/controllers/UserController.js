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