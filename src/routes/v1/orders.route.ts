const express = require("express");
const ordersController = require("../../controller/orders.controller");
const limiter = require("../../middleware/limiter");
const router = express.Router();

router
  .route("/")
  .get(ordersController.getAllOrders)
  .post(ordersController.createOrder);

router
  .route("/:id")
  .get(ordersController.getOrderDetail)
  .patch(ordersController.updateAOrder);

module.exports = router;
