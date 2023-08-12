const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const stockSchema = mongoose.Schema(
  {
    productId: {
      type: ObjectId,
      required: true,
      ref: "Product",
    },
    name: {
      type: String,
      required: [true, "Please provide a name for this Stock"],
      trim: true,
      unique: [true, "Name must be unique."],
      lowercase: true,
      minLength: [3, "Name must be atleast 3 characters."],
      maxLength: [100, "Name is too large."],
    },
    description: {
      type: String,
      required: true,
    },

    regularPrice: {
      type: Number,
      required: true,
      min: [0, "Product price can't be negative"],
    },
    offerPrice: {
      type: Number,
      required: true,
      min: [0, "Product price can't be negative"],
    },

    quantity: {
      type: Number,
      required: true,
      min: [0, "Product quantity can't be negative"],
    },

    brand: {
      name: {
        type: String,
        required: true,
      },
      id: {
        type: ObjectId,
        ref: "Brand",
        required: true,
      },
    },

    store: {
      name: {
        type: String,
        required: true,
      },
      id: {
        type: ObjectId,
        ref: "Store",
        required: true,
      },
    },

    rating: {
      type: Number,
      required: false,
    },

    categories: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      required: true,
      enum: {
        values: ["in-stock", "out-of-stock", "discontinued"],
        message: "Status can't be {VALUE}",
      },
    },
  },
  { timestamp: true }
);

const Stock = mongoose.model("Stock", stockSchema);

module.exports = Stock;
