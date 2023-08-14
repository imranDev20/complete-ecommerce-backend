import { ProductType } from "../@types/product.type.js";
import Product from "../model/Product.js";

export const getAllProductsService = async (categories: any) => {
  if (categories) {
    const categoriesToFilter = categories.toString().split(",");
    return await Product.find({ "category.name": { $in: categoriesToFilter } });
  }

  return await Product.find();
};

export const getProductDetailService = async (id: string) => {
  const product = await Product.findOne({ _id: id });
  return product;
};

export const createProductService = async (product: ProductType) => {
  return await Product.create(product);
};

export const updateProductService = async (
  id: string,
  product: ProductType
) => {
  return await Product.findByIdAndUpdate(id, product);
};
