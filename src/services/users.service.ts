import { UserDocument } from "../@types/user.js";
import User from "../model/User.js";

export const getUsersService = async () => {
  return await User.find({});
};

export const getUserService = async (email: string, aggregate?: string) => {
  console.log(aggregate);

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
            stock: 1,
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

export const updateUserService = async (email: string, user: UserDocument) => {
  return await User.findOneAndUpdate({ email: email }, user, {
    new: true,
    upsert: false,
  });
};
