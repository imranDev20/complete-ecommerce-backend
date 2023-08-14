import Category from "../model/Category.js";

export const getCategoriesService = async () => {
  return await Category.find({});
};

export const getCategoryService = async (id: string) => {
  const category = await Category.findOne({ _id: id });
  return category;
};

export const createCategoryService = async (category: string) => {
  return await Category.create(category);
};

export const updateCategoryService = async (id: string, category: any) => {
  return await Category.findByIdAndUpdate(id, category);
};
