import { Types, Document } from "mongoose";

export type BrandDocument = Document & {
  name: string;
  description: string;
  website: string;
  origin?: string;
  products: Types.Array<Product["_id"]>;
  store: Types.Array<Store>;
  status: "active" | "inactive";
};
