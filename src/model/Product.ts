const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name for this Product"],
      trim: true,
      unique: [true, "Name must be unique."],
      minLength: [3, "Name must be atleast 3 characters."],
      maxLength: [100, "Name is too large."],
    },
    description: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
      required: [true, "Image url is required"],
    },

    regularPrice: {
      type: Number,
      required: [true, "Please provide a price for this product"],
    },

    discountPrice: {
      type: Number,
      default: null,
    },

    unit: {
      type: String,
      required: true,
      enum: {
        values: ["kg", "litre", "pcs", "bag"],
        message: "Unit value can't be {VALUE}. Must be kg/litre/pcs/bag",
      },
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

    rating: {
      type: Number,
      default: 0,
    },

    attributes: [
      {
        name: String,
        value: [String],
        unit: String,
      },
    ],

    category: {
      name: {
        type: String,
        required: true,
      },
      id: {
        type: ObjectId,
        ref: "Category",
        required: true,
      },
    },
  },
  { timestamp: true }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
