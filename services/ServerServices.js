const express=require('express')
const UserRouter=require('../app/routers/api/UserRoute')
const app=express()

const ServerServices=class{
    constructor(){
        
        app.use(express.json())
        this.addEndpoint()
        console.log("ss");
    }

    start(port){
        app.listen(port,function(){
           console.log("use in port "+port);
        })
        
        console.log("done");
    }

    addEndpoint(){
        //middleware calling
        app.use("/api/v1/users/",UserRouter)
    }

    getApp(){
        return app;
    }
}

module.exports=ServerServices