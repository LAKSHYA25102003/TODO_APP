const User=require("../models/user");
module.exports={
    SignIn:function(req,res)
    {
        return res.render('SignIn');
    },
    SignUp:function(req,res)
    {
        return res.render("SignUp");
    },
    create_user:function(req,res)
    {
        User.create({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password
        },function(err,new_user){
            if(err)
            {
                console.log("error in creating account");
                return ;
            }
            res.redirect("/users/SignIn");
        });
    },
    create_session:function(req,res)
    {
        return res.render("todoList");
    }
}

