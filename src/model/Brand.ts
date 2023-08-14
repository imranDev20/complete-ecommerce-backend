const mongoose = require("mongoose");
const validator = require("validator");
const { ObjectId } = mongoose.Schema.Types;

const brandSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name for this Brand"],
      trim: true,
      lowercase: true,
      unique: [true, "Name must be unique."],
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
      unique: [true, "Website must be unique."],
      validate: [validator.isURL, "Please provide a valid URL"],
    },

    origin: {
      type: String,
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
    },
  },
  { timestamp: true }
);

const Brand = mongoose.model("Brand", brandSchema);

module.exports = Brand;