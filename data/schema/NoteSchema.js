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
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    },
    isPublished:{
        type:Boolean,
        default:false
    }
},{
    timestamps:true
})

NoteSchema.path("multimedia").options=({
    type:mongoose.Schema.Types.Object,
    properties:{
        image:{type:mongoose.Schema.Types.Buffer},
        audio:{type:mongoose.Schema.Types.Buffer}
    }
})
//console.log(NoteSchema.path("multimedia").options.properties);
module.exports=NoteSchema