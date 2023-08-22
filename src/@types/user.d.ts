import { Request } from "express";
import { Document } from "mongodb";

type PaymentMethod = {
  type: string;
  cardNumber: string;
  expirationDate: string;
  cardholderName: string;
};

type Address = {
  type: "billing" | "shipping";
  street: string;
  city: string;
  state: string;
  postalCode: string;
};

type SupportTicket = Types.Array<Types.ObjectId>;
type Orders = Types.Array<Types.ObjectId>;

export type UserDocument = Document & {
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  paymentMethods: PaymentMethod[];
  wishlist?: Types.Array<Types.ObjectId>;
  addresses: Types.Array<Address>;
  supportTicket: SupportTicket;
  orders: Orders;
};

export type DecodedPayload = {
  email: string;
  _id: string;
  iat: number;
  exp: number;
};

export type CustomRequest = Request & {
  user: DecodedPayload;
};
