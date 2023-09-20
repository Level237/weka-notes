const NoteService=require('../../services/NoteService')


exports.createNote=async(req,res)=>{

    try {
        const note=new NoteService()
    const noteSave=await note.createNote(req.body,req.user._id)

    res.status(201).send(noteSave)
    } catch (error) {
        res.status(400).send(error.message)
    }
}