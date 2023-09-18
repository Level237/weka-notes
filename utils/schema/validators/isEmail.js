

const isEmail=(value)=>{
    const regex=/^[a-zA-Z0-9.!#$%&'*+-/=?^_`{|}~]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    const testEmail=regex.test(value)
    if(!testEmail){
     throw new Error("Invalid email")
    }
   
}

module.exports=isEmail