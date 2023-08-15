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
  createdAt: Date;
  updatedAt: Date;
};
