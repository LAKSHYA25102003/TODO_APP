const express=require("express");
const router=express.Router();

const users_controllers=require("../controllers/users_controllers");

router.get("/SignIn",users_controllers.SignIn);
router.get("/SignUp",users_controllers.SignUp);
router.get("/create-session",users_controllers.create_session);
router.post("/create-user",users_controllers.create_user);


module.exports=router;