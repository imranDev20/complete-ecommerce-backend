import { Router } from "express";
const productsController = require("../../controller/products.controller");
const router = Router();

router
  .route("/")
  .get(productsController.getAllProducts)
  .post(productsController.createProduct);

router
  .route("/:id")
  .get(productsController.getProductDetail)
  .patch(productsController.updateAProduct);

export default router;
