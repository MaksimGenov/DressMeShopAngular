import { PageRequest } from "../PageRequest";

export class ProductSearchDTO {
  model: string
  brand: string
  minPrice: number
  maxPrice: number
  categories: string[]
  sizes: string[]
  pageRequest: PageRequest

  constructor()
  constructor(
    model?: string,
    brand?: string,
    categories?: string[],
    sizes?: string[],
    minPrice?: number,
    maxPrice?: number,
    sort?: Object) {
      this.brand = brand
      this.model = model
      this.categories = categories
      this.sizes = sizes
      this.minPrice = minPrice
      this.maxPrice = maxPrice
  }

}