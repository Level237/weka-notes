const express=require('express')
const AuthController=require("../../controllers/web/AuthController")
const router=express.Router()



router
.route("/register")
.post(AuthController.register)
.get(AuthController.registerView)

router
.route("/login")
.get(AuthController.loginView)

module.exports=router