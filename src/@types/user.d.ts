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

export type UserDocument = Document & {
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  paymentMethods: PaymentMethod[];
  wishlist?: Types.Array<Types.ObjectId>;
  addresses: Types.Array<Address>;
  supportTicket: SupportTicket;
};
