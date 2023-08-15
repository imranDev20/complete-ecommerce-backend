import { Schema, model } from "mongoose";
import validator from "validator";
import { BrandDocument } from "../@types/brand.js";

const { ObjectId } = Schema.Types;

const brandSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name for this Brand"],
      trim: true,
      lowercase: true,
      unique: true,
      minLength: [3, "Name must be atleast 3 characters."],
      maxLength: [100, "Name is too large."],
    },
    description: {
      type: String,
      required: true,
    },

    website: {
      type: String,
      lowercase: true,
      unique: true,
      validate: {
        validator: (value: string) => validator.default.isURL(value),
        message: "Please provide a valid URL",
      },
    },

    origin: {
      type: String,
      required: true,
    },

    products: [
      {
        type: ObjectId,
        ref: "Product",
      },
    ],

    store: [
      {
        name: String,
        phone: String,
        id: {
          type: ObjectId,
          ref: "Store",
        },
      },
    ],

    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
      required: true,
    },
  },
  { timestamps: true }
);

const Brand = model<BrandDocument>("Brand", brandSchema);

export default Brand;
