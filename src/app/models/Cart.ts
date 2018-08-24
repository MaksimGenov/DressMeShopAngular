import { Product } from "./Product";
import { User } from "./User";

export interface Cart {
  user: User,
  products: Product[]
} 