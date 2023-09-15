const ServerServices=require('./services/ServerServices')
const MongooseService=require('./services/MongooseService')
const UserRouter=require('./app/routers/api/UserRoute')

const server=new ServerServices()
const databaseConnection=new MongooseService()

server.start(3001);
databaseConnection.connect()

// endpoint calling from server
server.addEndpoint("/api/v1/users",UserRouter)

