import { SizeQuantity } from "../SizeQuantity";

export interface ProductCreateDTO {
  brand: string
  model: string
  categories: string[]
  color: string
  price: string
  description: string
  sizes: SizeQuantity[]
}