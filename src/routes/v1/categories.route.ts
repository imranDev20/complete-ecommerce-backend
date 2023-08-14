const express = require("express");
const categoriesController = require("../../controller/categories.controller");
const router = express.Router();

router
  .route("/")
  .get(categoriesController.getCategories)
  .post(categoriesController.createCategory);

router
  .route("/:id")
  .get(categoriesController.getCategory)
  .patch(categoriesController.updateCategory);

module.exports = router;