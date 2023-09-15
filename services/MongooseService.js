const mongoose=require('mongoose')

const urlConnection=process.env.DATABASE_LOCAL;

const MongooseService=class{
    
    constructor(){
        this.urlConnection=urlConnection
    }

    connect(){
        mongoose.connect(this.urlConnection).then(()=>{
            console.log("DB connection successfull!");
        })
    }
}

module.exports=MongooseService