import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

type DecodedPayload = {
  email: string;
  _id: string;
  iat: number;
  exp: number;
};

type CustomRequest = Request & {
  user: DecodedPayload;
};

const jwtVerifyPromisified = (token: string, secret: string) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, secret, {}, (err, payload) => {
      if (err) {
        reject(err);
      } else {
        resolve(payload);
      }
    });
  });
};

export const verifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(400).send({
        success: false,
        message: "Access denied: Unauthorized",
      });
    }

    const secret = process.env.JWT_SECRET_TOKEN as string;
    const decoded = (await jwtVerifyPromisified(
      token,
      secret
    )) as DecodedPayload;

    (<CustomRequest>req)["user"] = decoded;
    next();
  } catch (error) {
    return res.status(401).send({
      success: false,
      message: error instanceof Error ? error.message : String(error),
    });
  }
};
