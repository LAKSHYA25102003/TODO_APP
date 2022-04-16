const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost/ToDoApp");

const db=mongoose.connection;

db.on('error',console.error.bind("Error in connecting with mongo db"));
db.once("open",function(){
    console.log("Server is connected with data base successfully");
});