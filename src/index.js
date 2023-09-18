const express=require('express')

const app=express();
const MongooseService=require('../services/MongooseService')
const UserRouter=require('../app/routers/api/UserRoute')
const GuestRouter=require('../app/routers/api/GuestRoute')

app.use(express.json())

app.use("/api/v1/users/",UserRouter)
app.use("/api/v1/",GuestRouter)


const databaseConnection=new MongooseService()
databaseConnection.connect()

module.exports=app;

