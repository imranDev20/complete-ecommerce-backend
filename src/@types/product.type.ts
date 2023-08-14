export type ProductFilterType = {
  categories: string;
  brands: string;
};

type AttributeType = {
  name: string;
  value: string[];
  unit: string;
  _id: string;
};

type BrandType = {
  name: string;
  id: string;
};

export type CategoryType = {
  _id: string;
  name: string;
  products: string[];
  description: string;
  __v: number;
};

export type ProductType = {
  name: string;
  description: string;
  regularPrice: number;
  discountPrice: number;
  images: string[];
  unit: string;
  brand: BrandType;
  rating: number;
  attributes: AttributeType[];
  category: CategoryType;
  _id: string;
  __v: number;
};
