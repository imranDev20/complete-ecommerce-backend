import { Router } from "express";
import * as brandsController from "../../controller/brands.controller.js";

const router = Router();

router
  .route("/")
  .get(brandsController.getBrands)
  .post(brandsController.createBrand);

router
  .route("/:id")
  .get(brandsController.getBrandDetail)
  .patch(brandsController.updateABrand);

export default router;
