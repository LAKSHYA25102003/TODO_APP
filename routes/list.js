const express=require("express");
const router=express.Router();
const list_controllers=require("../controllers/list_controllers");


router.post("/add-work",list_controllers.addWork);

module.exports=router;