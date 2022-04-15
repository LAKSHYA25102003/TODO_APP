const express=require("express");
const router=express.Router();
const home_controllers=require("../controllers/home_controllers");


router.use("/users",require("./users"));
router.get("/",home_controllers.home);


module.exports=router;