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

    stock: {
      type: Number,
      default: 0,
      required: true,
    },
    status: {
      type: String,
      enum: ["active", "in stock", "out of stock", "discontinued"],
      required: true,
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

// Middleware to update status based on stock
productSchema.pre("save", function (next) {
  if (this.stock === 0) {
    this.status = "out of stock";
  }
  next();
});

productSchema.pre("validate", function (next) {
  if (this.discountPrice !== null && this.discountPrice === this.regularPrice) {
    this.invalidate(
      "discountPrice",
      "Discount price cannot be equal to the regular price."
    );
  }
  next();
});

const Product = model<ProductDocument>("Product", productSchema);

export default Product;
