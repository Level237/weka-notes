const express=require("express")
const UserController=require('../../controllers/api/UserController')
const router=express.Router()

router.post("/login",UserController.login)


module.exports=router