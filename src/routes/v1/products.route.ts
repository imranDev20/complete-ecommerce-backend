import { Router } from "express";
import * as productsController from "../../controller/products.controller.ts";

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
