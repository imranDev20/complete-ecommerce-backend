const mongoose = require("mongoose");

const serviceSchema = mongoose.Schema({
  service: {
    type: String,
    required: [true, "Service name is required."],
  },
  type: {
    type: String,
    required: true,
    enum: {
      values: ["appliance", "board", "room"],
    },
  },
  quantity: { type: Number, required: [true, "Quantity can't be empty."] },
  price: {
    type: String,
    required: [true, "Price can't be empty."],
  },
});

const orderSchema = mongoose.Schema(
  {
    services: {
      type: [serviceSchema],
      required: [true, "Service is required to place an order."],
    },
    additional: {
      zone: {
        type: String,
      },
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "Corresponding user is required"],
      ref: "User",
    },
  },
  { timestamp: true }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
