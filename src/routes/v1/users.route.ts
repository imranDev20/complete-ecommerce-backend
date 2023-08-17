import { Router } from "express";
import * as usersController from "../../controller/users.controller.js";

const router = Router();

router
  .route("/")
  .get(usersController.getUsers)
  .post(usersController.createUser);

router
  .route("/:email")
  .get(usersController.getUser)
  .patch(usersController.updateUser);

export default router;
