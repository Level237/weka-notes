const request=require("supertest")
const app=require('../app')

describe('create Account',()=>{
    it("must create Account User",function(){
        request(app).post('/s').send().expect(200)
     
    })
})  

