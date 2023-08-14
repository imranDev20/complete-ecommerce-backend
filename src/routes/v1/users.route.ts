import { Router } from "express";
import * as usersController from "../../controller/users.controller.ts";

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

export default router;
