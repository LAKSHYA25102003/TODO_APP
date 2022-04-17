const passport=require("passport");
const localStrategy=require("passport-local").Strategy;

const User=require("../models/user.js");

passport.use(new localStrategy({
    usernameField:"email",
},function(email,password,done){
    User.findOne({email:email},function(err,user)
    {
        if(err)
        {
            console.log("Error in finding your account");
            return done(err);
        }
        if(!user||password!=user.password)
        {
            console.log("Invalid credential");
            return done(null,false);
        }
        return done(null,user);
    });
}));

passport.serializeUser(function(user,done)
{
    return done(null,user.id);
});

passport.deserializeUser(function(id,done)
{
    User.findById(id,function(err,user)
    {
        if(err)
        {
            console.log("Error in serching account");
            return done(err);
        }
        return done(null,user);
    })
});


passport.checkAuthentication=function(req,res,next)
{
    if(req.isAuthenticated())
    {
        return next();
    }
    return res.redirect("/users/SignIn");
}


passport.authenticationHandler=function(req,res,next)
{
    if(req.isAuthenticated())
    {
        res.locals.user=req.user;
    }
    next();
}


module.exports=passport;

