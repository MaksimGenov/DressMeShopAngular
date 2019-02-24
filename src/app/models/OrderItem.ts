import { Product } from "./Product";
import { Size } from "./Size";

export interface OrderItem {
  id?: any
  product: Product
  size: Size
  quantity: number
}