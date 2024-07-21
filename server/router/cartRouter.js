import express from "express";
import * as controller from "../controller/cartController.js";

const router = express.Router();

router.post("/addcart", controller.addcart);
router.post("/cartCount", controller.cartCount);
router.post("/cartList", controller.cartList);
router.post("/deleteCartSelected", controller.deleteCartSelected);
router.post("/deleteCartOne", controller.deleteCartOne);

export default router;