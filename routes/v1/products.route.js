const express = require("express");
const productsController = require("../../controller/products.controller");
const limiter = require("../../middleware/limiter");
const router = express.Router();

router
  .route("/")
  .get(productsController.getAllProducts)
  .post(productsController.createProduct);

router
  .route("/:id")
  .get(productsController.getProductDetail)
  .patch(productsController.updateAProduct);

module.exports = router;
