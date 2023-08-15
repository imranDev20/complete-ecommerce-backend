import { UserDocument } from "../@types/user.js";
import User from "../model/User.js";

export const getUsersService = async () => {
  return await User.find({});
};

export const getUserService = async (id: string, populate: string) => {
  return await User.findOne({ _id: id }).populate(populate);
};

export const createUserService = async (user: UserDocument) => {
  return await User.create(user);
};

export const updateUserService = async (id: string, user: UserDocument) => {
  return await User.findByIdAndUpdate({ _id: id }, user, { new: true });
};
