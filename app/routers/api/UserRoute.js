const express=require('express')
const userController=require('../../controllers/UserController')

const router=express.Router()

router
.route("/")
.post(userController.createUser)
.get(userController.AllUsers)

router
.route("/:id")
.get(userController.getUser)
module.exports=router