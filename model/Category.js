const mongoose = require("mongoose");

const caategorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name for this Category"],
      trim: true,
      unique: [true, "Name must be unique."],
      minLength: [3, "Name must be atleast 3 characters."],
      maxLength: [100, "Name is too large."],
    },

    supplier: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },

    // supplier: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Supplier",
    // },
  },
  { timestamp: true }
);

const Category = mongoose.model("Category", caategorySchema);

module.exports = Category;
