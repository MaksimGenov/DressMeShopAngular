import { Category } from "./Category";
import { Brand } from "./Brand";
import { SizeQuantity } from "./SizeQuantity";
import { Image } from "./Image";

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