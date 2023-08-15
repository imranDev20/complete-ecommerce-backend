type OrderItem = {
  product: Types.ObjectId;
  quantity: number;
};

export type OrderDocument = Document & {
  user: Types.ObjectId;
  items: OrderItem[];
  totalAmount: number;
  status: "pending" | "completed" | "cancelled";
};
