import { Router } from "express";
const ordersController = require("../../controller/orders.controller");
const router = Router();

router
  .route("/")
  .get(ordersController.getAllOrders)
  .post(ordersController.createOrder);

router
  .route("/:id")
  .get(ordersController.getOrderDetail)
  .patch(ordersController.updateAOrder);

export default router;
