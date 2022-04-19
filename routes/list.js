const express=require("express");
const router=express.Router();
const list_controllers=require("../controllers/list_controllers");


router.post("/add-work",list_controllers.addWork);
router.post("/update-work",list_controllers.updateWork);

router.get("/delete-work",list_controllers.deleteWork);

module.exports=router;