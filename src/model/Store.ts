const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const storeSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name for this Store"],
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
    email: {
      type: String,
      lowercase: true,
      unique: true,
    },

    website: {
      type: String,
      lowercase: true,
      unique: [true, "Website must be unique."],
      validate: [validator.isURL, "Please provide a valid URL"],
    },

    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },

    manager: {
      name: String,
      phone: String,
      id: {
        type: ObjectId,
        ref: "User",
      },
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

const Store = mongoose.model("Store", storeSchema);

module.exports = Store;
