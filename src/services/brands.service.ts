import { BrandDocument } from "../@types/brand.js";
import Brand from "../model/Brand.js";

export const getBrandsService = async () => {
  return await Brand.find({});
};

export const getBrandDetailService = async (id: string) => {
  const brand = await Brand.findOne({ _id: id });
  return brand;
};

export const createBrandService = async (brand: any) => {
  return await Brand.create(brand);
};

export const updateBrandService = async (id: string, brand: BrandDocument) => {
  return await Brand.findByIdAndUpdate(id, brand);
};
