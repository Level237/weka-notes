const request=require("supertest")
const app=require('../src/index')
const User=require('../data/models/User')

beforeEach(async()=>{
await User.deleteMany();
})

describe('New Account',()=>{
    it("must create Account User",async()=>{
        await request(app).get('/api/v1/users/').send({
            userName:"martin",
            email:"bramslevel129@gmail.com",
            password:"level129"
        }).expect(201)
    })
})  




