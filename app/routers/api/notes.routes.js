const express=require('express')
const NoteController=require("../../controllers/api/NoteController")
const auth=require("../../middlewares/auth")

const router=express.Router()

router
.route("/")
.post(auth,NoteController.createNote)
.get(auth,NoteController.AllNotes)

router
.route("/:id")
.get(auth,NoteController.getNote)

module.exports=router