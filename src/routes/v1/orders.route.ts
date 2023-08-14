import { Router } from "express";
import * as ordersController from "../../controller/orders.controller.js";

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
