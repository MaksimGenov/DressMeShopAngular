import { Image } from "./Image";
import { Category } from "./Category";
import { Brand } from "./Brand";

export interface Product {
  _id: string,
  brand: Brand
  model: string
  images: Image[]
  categories: Category[]
  color: string
  price: string
  description: string
}