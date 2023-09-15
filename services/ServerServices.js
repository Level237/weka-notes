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

    addEndpoint(endPoint,router){
        //middleware calling
        this.server.use(endPoint,router)
    }
}

module.exports=ServerServices