const NoteSchema=require('../schema/NoteSchema')
const mongoose=require('mongoose')

const Note=mongoose.model("Note",NoteSchema)

module.exports=Note