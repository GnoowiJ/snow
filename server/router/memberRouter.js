import express from "express";
import * as controller from "../controller/memberController.js"

const router = express.Router();

router.post("/signup", controller.signupMember);
router.post("/idCheck", controller.idCheck);
router.post("/login", controller.login);
router.post("/findId", controller.findId);
router.post("/findPass", controller.findPass);
router.post("/memberinfo", controller.memberInfo);
router.post("/update", controller.update);

export default router;