import jwt from "jsonwebtoken";

type UserInfo = {
  email: string;
  _id: string;
};

export default function generateToken(user: UserInfo) {
  const secretKey = process.env.JWT_SECRET_TOKEN;

  const payload = {
    email: user.email,
    _id: user._id,
  };

  if (secretKey) {
    const token = jwt.sign(payload, secretKey, {
      expiresIn: "10h",
    });
    return token;
  }
}
