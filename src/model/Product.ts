import { Schema, model } from "mongoose";
import { ProductDocument } from "../@types/product.js";
const { ObjectId } = Schema.Types;

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name for this Product"],
      trim: true,
      unique: true,
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
        lowercase: true,
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
        lowercase: true,
      },
      id: {
        type: ObjectId,
        ref: "Category",
        required: true,
      },
    },
  },
  { timestamps: true }
);

const Product = model<ProductDocument>("Product", productSchema);

export default Product;
