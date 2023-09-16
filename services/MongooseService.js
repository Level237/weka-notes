const mongoose=require('mongoose')

const urlConnection=process.env.DATABASE_LOCAL;

const MongooseService=class{
    
    constructor(){
        this.urlConnection=urlConnection
    }

    async connect(){
        await mongoose.connect(this.urlConnection).then(function(){
           
        })
    }
}

module.exports=MongooseService