const express = require("express");
const usersController = require("../../controller/users.controller");
const limiter = require("../../middleware/limiter");
const router = express.Router();

router
  .route("/")
  .get(usersController.getAllUsers)
  .post(usersController.createUser);

router
  .route("/:email")
  .get(usersController.getUserDetail)
  .patch(usersController.updateAUser);

router.route("/login").post(usersController.loginUser);

module.exports = router;
