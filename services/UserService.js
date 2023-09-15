const User=require('../data/models/User')

const UserService=class{
    constructor(){
        this.User=new User
    }

    createUser(data){

    
            const user=new User({
                ...data
            })
            this.User.save(user)
    
            return user;
       
    }
}

module.exports=UserService