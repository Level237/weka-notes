

exports.register=async(req,res)=>{

}

exports.registerView=(req,res)=>{

    res.render('auth/register')
}

exports.loginView=(req,res)=>{

    res.render("auth/login")
}