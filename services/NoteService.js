const Note=require('../data/models/Note')


const NoteService=class{
    constructor(){

    }

    async createNote(body,currentUserId){
       
            const note=new Note({...body,owner:currentUserId})
            await note.save();

            return note;
    }
}

module.exports=NoteService