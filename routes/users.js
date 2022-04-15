const express=require("express");
const router=express.Router();

const users_controllers=require("../controllers/users_controllers");

router.get("/SignIn",users_controllers.SignIn);
router.get("/SignUp",users_controllers.SignUp);


module.exports=router;