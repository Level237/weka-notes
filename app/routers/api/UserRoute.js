const express=require('express')
const userController=require('../../controllers/UserController')

const router=express.Router()

router
.route("/")
.get(userController.createUser)

router.get('/level',(req,res)=>{
    res.send("level")
})
module.exports=router