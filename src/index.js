const express=require('express')

const app=express();
const MongooseService=require('../services/MongooseService')
const UserRouter=require('../app/routers/api/UserRoute')

app.use(express.json())

app.use("/api/v1/users/",UserRouter)


const databaseConnection=new MongooseService()
databaseConnection.connect()

module.exports=app;

