const express=require("express");
const port=8000;
const app=express();
const db=require("./config/mongoose.js");
const User=require("./models/user.js");
const Tasks=require("./models/userTasks");



// middle ware
app.use(express.urlencoded());
app.use(express.static("assets"));


// setting view engine and assets
app.set("view engine","ejs");
app.set("views","./views");


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