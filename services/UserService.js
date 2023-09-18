const User=require('../data/models/User')

const UserService=class{
    constructor(){
        
    }

    async createUser(userData){
        const user=new User(userData)
       
        await user.save()
        await user.generateAuthToken()
            return user
       
    }

    async getAllUser(){
        const users=User.find({})

        return users
    }
    async getUser(id){
        this.User=User.findById(id)

        return this.User;
    }
}

module.exports=UserService