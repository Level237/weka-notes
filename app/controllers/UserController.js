const UserService=require('../../services/UserService')


exports.createUser=async(req,res)=>{

    try {
        const user=await UserService.createUser(req.body)

        res.send(user)
    } catch (error) {
        res.send(error)
    }
}