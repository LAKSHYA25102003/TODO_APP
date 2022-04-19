module.exports={
    home:function(req,res)
    {
        res.render('home',{
            user:req.user
        });
        return ;
    }
}