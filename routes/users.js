const express=require("express");
const router=express.Router();
const passport=require("passport");

const users_controllers=require("../controllers/users_controllers");

router.get("/SignIn",users_controllers.SignIn);
router.get("/SignUp",users_controllers.SignUp);
router.post("/create-session",passport.authenticate("local",{
    failureRedirect:"/users/SignIn",
}),users_controllers.create_session);
router.post("/create-user",users_controllers.create_user);

router.get("/SignOut",users_controllers.SignOut);
router.get("/todoList",passport.checkAuthentication,users_controllers.todoList);

router.use("/create-session",require("./list"));


module.exports=router;