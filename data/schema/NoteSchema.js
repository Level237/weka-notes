const mongoose=require('mongoose');


const NoteSchema=new mongoose.Schema({
    title:{
        type:String,
        trim:true,
        unique:true,
        uppercase:true,
        length:20
    },
    description:{
        type:String,
    },
    content:{
    type:String,
    required:true
    },
    multimedia:{
        type:Object
    },
    isPublished:{
        type:Boolean,
        default:false
    }
})

NoteSchema.path("multimedia").options({
    type:mongoose.Schema.Types.Object,
    properties:{
        image:{type:mongoose.Schema.Types.Buffer},
        audio:{type:mongoose.Schema.Types.Buffer}
    }
})

module.exports=NoteSchema