import { Image } from "./Image";
import { Category } from "./Category";
import { Brand } from "./Brand";
import { SizeQuantity } from "./SizeQuantity";

export interface Product {
  id: string,
  brand: Brand
  model: string
  images: Image[]
  categories: Category[]
  color: string
  price: string
  description: string
  sizes: SizeQuantity[]
}