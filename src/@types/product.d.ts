type Attribute = {
  name: string;
  value: string[];
  unit: string;
};

export type ProductDocument = Document & {
  name: string;
  description: string;
  images: string[];
  regularPrice: number;
  discountPrice: number | null;
  unit: "kg" | "litre" | "pcs" | "bag";
  stock: number;
  status: "active" | "in stock" | "out of stock" | "discontinued";
  brand: {
    name: string;
    id: Types.ObjectId;
  };
  rating: number;
  attributes: Attribute[];
  category: {
    name: string;
    id: Types.ObjectId;
  };
};
