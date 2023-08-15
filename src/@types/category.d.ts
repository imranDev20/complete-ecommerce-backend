import { Document, Types } from "mongoose";

export type CategoryDocument = Document & {
  name: string;
  products: Types.Array<Types.ObjectId>;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
};
