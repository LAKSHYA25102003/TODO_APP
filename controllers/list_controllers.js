const Task=require("../models/userTasks");
module.exports={
    addWork:function(req,res)
    {
        Task.create({
            description:req.body.description, 
            category:req.body.category,
            date:req.body.date,
            creator:req.user.email
        },function(err,task)
        {
            if(err)
            {
                console.log("error in adding work");
                console.log(err);
                return res.redirect("/users/todoList");
            } 
            res.redirect("/users/todoList");  
        });
        // Task.create({
        //     description:req.body.description,
        //     category:req.body.category,
        //     date:req.body.date,
        // },function(err,task)
        // {
        //     if(err)
        //     {
        //         console.log("error in adding work");
        //         return res.redirect("back");
        //     }
        //     Task.find({email:task.creator},function(err,workList)
        //     {
        //         if(err)
        //         {
        //             console.log("error in finding your work list");
        //             return res.redirect("back");
        //         }
        //         res.render("todoList",{
        //             works:workList,
        //         })
        //     });
        // })
    },
    updateWork:function(req,res)
    {
        let id=req.query.id;
        Task.findByIdAndUpdate(id,{
            description:req.body.description,
            date:req.body.date,
            category:req.body.category
        },function(err,task)
        {
            if(err)
            {
                console.log("error in editing task");
                return res.redirect('/users/todoList');
            }
            res.redirect('/users/todoList');
        });
    },
    deleteWork:function(req,res)
    {
        let id=req.query.id;
        Task.findByIdAndDelete(id,function(err)
        {
            if(err)
            {
                console.log("there is an error in deleting your task");
                return res.redirect("back");
            }
            res.redirect("/users/todoList");
        })
    }
}