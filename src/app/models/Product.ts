import { Image } from "./Image";
import { Category } from "./Category";

export interface Product {
  brand: string
  model: string
  images: Image[]
  categories: Category[]
  color: string
  price: string
  description: string
}