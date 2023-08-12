const Category = require("../model/Category");

exports.getCategoriesService = async () => {
  return await Category.find({});
};

exports.getCategoryService = async (id) => {
  const category = await Category.findOne({ _id: id });
  return category;
};

exports.createCategoryService = async (category) => {
  return await Category.create(category);
};

exports.updateCategoryService = async (id, category) => {
  return await Category.findByIdAndUpdate(id, category);
};
