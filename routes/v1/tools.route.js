const express = require("express");
const toolsController = require("../../controller/tools.controller");
const limiter = require("../../middleware/limiter");
const router = express.Router();

router
  .route("/")
  .get(limiter, toolsController.getAllTools)
  .post(toolsController.saveATool);

router
  .route("/:id")
  .get(limiter, toolsController.getToolDetail)
  .patch(limiter, toolsController.updateATool);

module.exports = router;
