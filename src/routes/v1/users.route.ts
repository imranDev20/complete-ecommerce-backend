import { Router } from "express";
import * as usersController from "../../controller/users.controller.js";
import { verifyToken } from "../../middleware/verifyToken.js";
// import { verifyToken } from "../../middleware/verifyToken.js";

const router = Router();

router
  .route("/")
  .get(verifyToken, usersController.getUsers)
  .post(usersController.createUser);

router.route("/me").get(verifyToken, usersController.getMe);

router.route("/login/:email").patch(usersController.loginUser);

router
  .route("/:email")
  .get(verifyToken, usersController.getUser)
  .patch(verifyToken, usersController.updateUser);

export default router;
