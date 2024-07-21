import express from "express";
import * as controller from "../controller/eventController.js";

const router = express.Router();

router.get("/", controller.getEvent);
router.get("/:id", controller.getEventDetail);
router.post("/updateHits", controller.updateEventHits);

export default router;
