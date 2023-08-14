import { Router } from "express";
const usersController = require("../../controller/users.controller");
import limiter from "../../middleware/limiter.ts";
const router = Router();

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
