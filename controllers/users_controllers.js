const User=require("../models/user");
const Task=require("../models/userTasks");
module.exports={
    SignIn:function(req,res)
    {
        if(req.isAuthenticated())
        {
            return res.redirect('/users/todoList');
        }
        return res.render("SignIn");
    },
    SignUp:function(req,res)
    {
        if(req.isAuthenticated())
        {
            return res.redirect('/users/todoList');
        }
        return res.render("SignUp");
        
        
    },
    create_user:function(req,res)
    {
        User.findOne({email:req.body.email},function(err,user)
        {
            if(err)
            {
                console.log("error "+err);
                return res.redirect("back") ;
            }
            if(!user)
            {
                User.create({
                    name:req.body.name,
                    email:req.body.email,
                    password:req.body.password
                },function(err,user){
                    if(err)
                    {
                        console.log("error in creating account");
                        return res.redirect("back") ;
                    }
                    res.redirect("/users/SignIn");
                });   
            }
            else
            {
                res.redirect("back");
            }
        });
    },
    create_session:function(req,res)
    {
        
        res.redirect("/users/todoList");
       
    },
    todoList:function(req,res)
    {
        Task.find({creator:req.user.email},function(err,task)
        {
            res.render("todoList",{
                user:req.user,
                works:task,
            })
        });
        
        // return res.render("todoList",{
        //     user:req.user,
        // });
    },
    SignOut:function(req,res)
    {
        req.logout();
        res.redirect("/users/SignIn");
    }
}

