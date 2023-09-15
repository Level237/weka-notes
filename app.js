const ServerServices=require('./services/ServerServices')
const MongooseService=require('./services/MongooseService')

const server=new ServerServices()
const databaseConnection=new MongooseService()

server.start(3001);
databaseConnection.connect()
console.log(process.env);

