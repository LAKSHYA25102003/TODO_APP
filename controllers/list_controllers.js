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
                return res.redirect("back");
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
    }
}