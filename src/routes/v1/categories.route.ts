import { Router } from "express";
import * as categoriesController from "../../controller/categories.controller.ts";

const router = Router();

router
  .route("/")
  .get(categoriesController.getCategories)
  .post(categoriesController.createCategory);

router
  .route("/:id")
  .get(categoriesController.getCategory)
  .patch(categoriesController.updateCategory);

export default router;
