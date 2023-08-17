import { UserDocument } from "../@types/user.js";
import User from "../model/User.js";

export const getUsersService = async () => {
  return await User.find({});
};

export const getUserService = async (email: string, aggregate: string) => {
  if (aggregate) {
    const wishlistAggregate = await User.aggregate([
      {
        $match: { email: email },
      },
      {
        $lookup: {
          from: "products", // Collection name for products
          localField: "wishlist",
          foreignField: "_id",
          as: "wishlistProducts",
        },
      },
      {
        $project: {
          email: 1,
          firstName: 1,
          lastName: 1,
          wishlistProducts: {
            _id: 1,
            name: 1,
            images: 1,
            regularPrice: 1,
            discountPrice: 1,
            discountPercentage: 1,
            rating: 1,
            // Include other product fields you need
          },
        },
      },
    ]);
    return wishlistAggregate[0];
  }

  return await User.findOne({ email: email });
};

export const createUserService = async (user: UserDocument) => {
  return await User.create(user);
};

export const updateUserService = async (id: string, user: UserDocument) => {
  return await User.findByIdAndUpdate({ _id: id }, user, { new: true });
};
