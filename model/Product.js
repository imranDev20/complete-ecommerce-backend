const mongoose = require("mongoose");

const attributeSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Attribute name is important"],
  },
  value: {
    type: [String],
  },
  unit: {
    type: String,
  },
});

const reviewSchema = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  body: {
    type: String,
  },
  rating: {
    type: Number,
  },
});

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
    image: {
      type: String,
      required: [true, "Image url is required"],
    },
    offerPrice: {
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
    regularPrice: {
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
    brand: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: false,
    },
    stock: {
      type: Number,
      required: false,
    },
    attributes: [attributeSchema],
    reviews: [reviewSchema],

    /* another field for region, color, size, storage, weight, capacity, flavor - save these for a specific shop  */

    categories: [
      {
        name: {
          type: String,
          required: true,
        },
        _id: mongoose.Schema.Types.ObjectId,
      },
    ],
    supplier: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Supplier",
    },
  },
  { timestamp: true }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
