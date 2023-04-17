const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const storeSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name for this Store"],
      trim: true,
      unique: [true, "Name must be unique."],
      minLength: [3, "Name must be atleast 3 characters."],
      maxLength: [100, "Name is too large."],
    },
    description: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
      min: [0, "Price can't be negative"],
      validate: {
        validator: (value) => {
          const isInteger = Number.isInteger(value);

          if (isInteger) {
            return true;
          } else {
            return false;
          }
        },
      },
      message: "Quantity must be an integer",
    },

    unit: {
      type: String,
      required: true,
      enum: {
        values: ["kg", "litre", "pcs"],
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
