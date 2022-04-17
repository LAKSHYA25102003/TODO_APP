const mongoose=require("mongoose");
const User=require("./user");
const loginUser=require("../index.js");
const taskSchema=new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    creator:{
        type:String,
        required:true
    }
},{
    timestamps:true
});

const Task=mongoose.model("Task",taskSchema);

module.exports=Task;