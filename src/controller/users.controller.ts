import { Request, Response } from "express";
import {
  createUserService,
  getUserService,
  getUsersService,
  updateUserService,
} from "../services/users.service.js";
import generateToken from "../utils/token.js";
import { CustomRequest } from "../@types/user.js";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await getUsersService();

    if (!users) {
      return res.status(400).send({
        success: false,
        message: "Internal server error",
      });
    }

    if (users.length === 0) {
      return res.status(404).send({
        success: false,
        message: "Users not found",
      });
    }

    return res.status(200).send({
      success: true,
      message: "Users found",
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
    const aggregate = req.query.aggregate as string;

    if (!email || email === "")
      return res
        .status(400)
        .send({ success: false, message: "You need to provide an email" });

    const user = await getUserService(email, aggregate);

    if (!user)
      return res.status(400).send({
        success: false,
        message: "Couldn't find a user with this Email",
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
        message:
          "User data is missing. Please provide required user information.",
      });
    }

    const result = await createUserService(user);

    if (!result) {
      return res.status(400).send({
        success: false,
        message: "Internal server error",
      });
    }

    const payload = {
      email: result?.email as string,
      _id: result?._id as string,
    };

    const accessToken = generateToken(payload);

    return res.status(200).send({
      success: true,
      message: `User added with id: ${result._id}`,
      accessToken: accessToken,
      data: result,
    });
  } catch (error: any) {
    if (error.code === 11000 && error.keyPattern?.email) {
      return res.status(400).send({
        success: false,
        message: `The email ${error.keyValue.email} is already in use.`,
      });
    } else {
      return res.status(500).send({
        success: false,
        message: error instanceof Error ? error.message : String(error),
      });
    }
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const user = req.body;
    const email = req.params.email as string;

    if (!user || !email || email === "") {
      return res.status(400).send({
        success: false,
        message:
          "User data or user email is missing. Please provide required user information.",
      });
    }

    const result = await updateUserService(email, user);

    if (!result) {
      return res.status(400).send({
        success: false,
        message: "Internal server error",
      });
    }

    return res.status(200).send({
      success: true,
      message: `User updated with id: ${result._id}`,
      data: result,
    });
  } catch (error) {
    return res.status(400).send({
      success: false,
      message: error instanceof Error ? error.message : String(error),
    });
  }
};

export const getMe = async (req: Request, res: Response) => {
  try {
    const decodedUser = (<CustomRequest>req)["user"];

    const aggregate = req.query.aggregate as string;

    const user = await getUserService(decodedUser.email, aggregate);

    if (!user) {
      return res
        .status(401)
        .send({ message: "User not found or invalid credentials" });
    }
    res.status(200).send({ success: true, data: user });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Internal server error",
    });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const email = req.params.email as string;

    if (!email || email === "") {
      return res.status(400).send({
        success: false,
        message:
          "User email is missing. Please provide required user information.",
      });
    }

    const user = await getUserService(email);

    if (!user)
      return res.status(400).send({
        success: false,
        message: "Couldn't find a user with this Email",
      });

    const payload = {
      email: user?.email as string,
      _id: user?._id as string,
    };

    const accessToken = generateToken(payload);

    res
      .status(200)
      .send({ success: true, data: user, accessToken: accessToken });
  } catch (error) {
    return res.status(400).send({
      success: false,
      message: error instanceof Error ? error.message : String(error),
    });
  }
};
