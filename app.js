const ServerServices=require('./services/ServerServices')
const MongooseService=require('./services/MongooseService')
const UserRouter=require('./app/routers/api/UserRoute')

const server=new ServerServices()
const databaseConnection=new MongooseService()
const app=server.getApp()

app.get('/',(req,res)=>{
    res.send("lo")
})

databaseConnection.connect()


// endpoint calling from server


server.start(3000);
module.exports=app;

