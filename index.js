const cookieParser = require("cookie-parser");
const express=require("express");
const port=8000;
const app=express();
const db=require("./config/mongoose.js");
const User=require("./models/user.js");
const Tasks=require("./models/userTasks");

const passport=require("passport");
const localStrategy=require("./config/passport-local-strategy");
const expressSession=require("express-session");
const connectMongo=require("connect-mongo");
const req = require("express/lib/request");
const { localsName } = require("ejs");



// middle ware
app.use(cookieParser());
app.use(express.urlencoded());
app.use(express.static("assets"));


// setting view engine and assets
app.set("view engine","ejs");
app.set("views","./views");


app.use(expressSession({
        name:"todo",
        // to day changes at the time of deployment in production
        secret:"paljhhajkhafj",
        resave:false,
        saveUninitialized:false,
        cookie:{
            maxAge:(60*1000*100),
        },
        store:connectMongo.create(
        {
            mongoUrl:"mongodb://localhost/ToDoApp",
         } )
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.authenticationHandler);
module.exports.loginUser=function(req,res)
{
    return req.user;
}


app.use("/",require("./routes/home_routes"));




app.listen(port,function(err)
{
    if(err)
    {
        console.log("Error in starting the server");
        return ;
    }
    else
    {
        console.log(`Server is started successfully on port:${port}`);
        return ;
    }
})