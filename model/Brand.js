const mongoose = require("mongoose");
const validator = require("validator");
const { ObjectId } = mongoose.Schema.Types;

const brandSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name for this Brand"],
      trim: true,
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
      validate: [validator.isURL, "Please provide a valid URL"],
    },

    products: [
      {
        type: ObjectId,
        ref: "Product",
      },
    ],
  },
  { timestamp: true }
);

const Brand = mongoose.model("Brand", brandSchema);

module.exports = Brand;
