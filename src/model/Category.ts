import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema.Types;

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name for this Category"],
      trim: true,
      unique: true,
      lowercase: true,
      minLength: [3, "Name must be atleast 3 characters."],
      maxLength: [100, "Name is too large."],
    },

    products: [
      {
        type: ObjectId,
        ref: "Product",
      },
    ],

    description: {
      type: String,
    },
  },
  { timestamps: true }
);

const Category = mongoose.model("Category", categorySchema);

export default Category;
