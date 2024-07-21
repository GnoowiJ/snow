import express from "express";
import * as controller from "../controller/qnaController.js"

const router = express.Router();

router.get("/", controller.getQna);
router.get("/totalQna", controller.getTotalQna);
router.get("/:id", controller.getQnaDetail);

router.post("/write", controller.writeQna);
router.post("/updateHits", controller.updateBqHits);

router.post("/existQnaById", controller.existQnaById);
router.post("/getUser", controller.getUser);

export default router;