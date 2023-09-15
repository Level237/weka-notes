const express=require('express')

const app=express()

const ServerServices=class{
    constructor(){
        this.server=app;
    }

    start(port){
        this.server.listen(this.port,function(){
            console.log(`Server is up in port ${port}`);
        })
    }
}

module.exports=ServerServices