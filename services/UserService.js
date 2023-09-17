const User=require('../data/models/User')

const UserService=class{
    constructor(){
        
    }

    async createUser(userData){
        this.User=new User(userData)
        await this.User.save()
            return this.User;
       
    }
}

module.exports=UserService