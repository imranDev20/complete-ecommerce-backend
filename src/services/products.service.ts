import { ProductDocument } from "../@types/product.js";
import Product from "../model/Product.js";

export const getAllProductsService = async (
  categories: string,
  brands: string
) => {
  if (categories || brands) {
    const categoriesToFilter = categories ? categories.split(",") : undefined;

    const brandsToFilter = brands ? brands.split(",") : undefined;

    const categoryFilter = categoriesToFilter
      ? { "category.name": { $in: categoriesToFilter } }
      : {};
    const brandFilter = brandsToFilter
      ? { "brand.name": { $in: brandsToFilter } }
      : {};

    const query = {
      ...categoryFilter,
      ...brandFilter,
    };

    console.log(query);

    return await Product.find(query);
  }

  return await Product.find();
};

export const getProductDetailService = async (id: string) => {
  const product = await Product.findOne({ _id: id });
  return product;
};

export const createProductService = async (product: ProductDocument) => {
  return await Product.create(product);
};

export const updateProductService = async (
  id: string,
  product: ProductDocument
) => {
  return await Product.findByIdAndUpdate(id, product);
};
