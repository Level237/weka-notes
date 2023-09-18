const express=require('express')
const userController=require('../../controllers/UserController')
const auth=require('../../middlewares/auth')
const router=express.Router()

router
.route("/")
.post(userController.createUser)
.get(auth,userController.AllUsers)

router
.route("/:id")
.get(auth,userController.getUser)
module.exports=router