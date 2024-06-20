import { Product } from "../product/Product";
import { User } from "../user/User";

export type Order = {
  createdAt: Date;
  id: string;
  orderDate: Date | null;
  product?: Product | null;
  quantity: number | null;
  totalAmount: number | null;
  updatedAt: Date;
  user?: User | null;
};
