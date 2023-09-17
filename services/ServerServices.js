const express=require('express')
const UserRouter=require('../app/routers/api/UserRoute')
const app=express()

const ServerServices=class{
    constructor(){
        
        app.use(express.json())
        this.addEndpoint()
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