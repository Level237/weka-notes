const express=require('express')
const userController=require('../../controllers/api/UserController')
const auth=require('../../middlewares/auth')
const router=express.Router()

router
.route("/")
.post(userController.createUser)
.get(userController.AllUsers)

router
.route("/me")
.get(auth,userController.getUser)
.patch(auth,userController.updateUser)
.delete(auth,userController.deleteAccount)

router
.route("/logout")
.post(auth,userController.logout)

module.exports=router