import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    products: [
      {
        name: {
          type: String,
          required: true,
        },
        _id: mongoose.Schema.Types.ObjectId,
      },
    ],

    user: {
      type: mongoose.Schema.Types.ObjectId,
      // required: [true, "Corresponding user is required"],
      ref: "User",
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;
