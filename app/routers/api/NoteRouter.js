const express=require('express')
const NoteController=require("../../controllers/NoteController")
const auth=require("../../middlewares/auth")

const router=express.Router()

router
.route("/")
.post(auth,NoteController.createNote)

module.exports=router