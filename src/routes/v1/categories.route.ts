import { Router } from "express";
const categoriesController = require("../../controller/categories.controller");
const router = Router();

router
  .route("/")
  .get(categoriesController.getCategories)
  .post(categoriesController.createCategory);

router
  .route("/:id")
  .get(categoriesController.getCategory)
  .patch(categoriesController.updateCategory);

module.exports = router;
