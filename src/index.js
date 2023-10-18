const express=require('express')
const path=require('path')
const bodyParser=require('body-parser')
const hbs=require('hbs')
const app=express();
const MongooseService=require('../services/MongooseService')
const UserRouter=require('../app/routers/api/user.routes')
const WebRouter=require('../app/routers/web/web.routes')
const GuestRouter=require('../app/routers/api/guest.routes')
const NoteRouter=require('../app/routers/api/notes.routes')

const viewPath=path.join(__dirname,'./views')
const publicPath=path.join(__dirname,'../public')

//Setup handlebars engine and view location
app.set("view engine","hbs")
app.set('views',viewPath)

app.use(express.static(publicPath))

app.use(express.json())

// Use the bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use("/api/v1/users/",UserRouter)
app.use("/api/v1/notes/",NoteRouter)
app.use("/api/v1/",GuestRouter)
app.use(WebRouter)


const databaseConnection=new MongooseService()
databaseConnection.connect()

module.exports=app;

