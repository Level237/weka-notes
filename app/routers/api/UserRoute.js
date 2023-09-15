const express=require('express')
const userController=require('../../controllers/UserController')

const router=express.Router()

router.route("/")
.get(userController.createUser)


module.exports=router