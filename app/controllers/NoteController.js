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

exports.AllNotes=async(req,res)=>{

    await req.user.populate({
        path:"notes"
    })
    res.send(req.user.notes)
}

exports.getNote=async(req,res)=>{

    const _id=req.params.id;
    try {

        const note=new NoteService();
        const getNote=await note.getNote(_id,req.user._id)

        if(!getNote){
            res.status(404).send({message:"note not found"})
        }
        res.send(getNote)
    } catch (error) {
        res.status(500).send(error)
    }
}