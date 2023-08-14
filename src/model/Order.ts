const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
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
  { timestamp: true }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
