import { Request, Response } from "express";
import {
  createUserService,
  getUserService,
  getUsersService,
  updateUserService,
} from "../services/users.service.js";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await getUsersService();

    if (!users) {
      return res.status(400).send({
        success: false,
        messages: "Internal server error",
      });
    }

    if (users.length === 0) {
      return res.status(404).send({
        success: false,
        messages: "Users not found",
      });
    }

    return res.status(200).send({
      success: true,
      messages: "Users found",
      data: users,
    });
  } catch (error) {
    return res.status(400).send({
      success: false,
      message: error instanceof Error ? error.message : String(error),
    });
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const { email } = req.params;

    console.log(req.params);
    const aggregate = req.query.aggregate as string;

    if (!email || email === "")
      return res
        .status(400)
        .send({ success: false, error: "You need to provide an email" });

    const user = await getUserService(email, aggregate);

    if (!user)
      return res.status(400).send({
        success: false,
        error: "Couldn't find a user with this Email",
      });

    res.status(200).send({ success: true, data: user });
  } catch (error) {
    return res.status(400).send({
      success: false,
      message: error instanceof Error ? error.message : String(error),
    });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const user = req.body;

    if (!user) {
      return res.status(400).send({
        success: false,
        messages:
          "User data is missing. Please provide valid user information.",
      });
    }

    const result = await createUserService(user);

    if (!result) {
      return res.status(400).send({
        success: false,
        messages: "Internal server error",
      });
    }

    return res.status(200).send({
      success: true,
      messages: `User added with id: ${result._id}`,
      data: result,
    });
  } catch (error) {
    return res.status(400).send({
      success: false,
      message: error instanceof Error ? error.message : String(error),
    });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const user = req.body;
    const id = req.params.id as string;

    if (!user || !id) {
      return res.status(400).send({
        success: false,
        messages:
          "User data or user ID is missing. Please provide valid user information.",
      });
    }

    const result = await updateUserService(id, user);

    if (!result) {
      return res.status(400).send({
        success: false,
        messages: "Internal server error",
      });
    }

    return res.status(200).send({
      success: true,
      messages: `User updated with id: ${result._id}`,
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
