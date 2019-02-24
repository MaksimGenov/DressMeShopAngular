export class ProductSearchDTO {
  model: string
  brand: string
  page: number
  pageSize: number
  minPrice: number
  maxPrice: number
  categories: string[]
  sizes: string[]

  constructor()
  constructor(
    model?: string,
    brand?: string,
    categories?: string[],
    sizes?: string[],
    minPrice?: number,
    maxPrice?: number) {
      this.brand = brand
      this.model = model
      this.categories = categories
      this.sizes = sizes
      this.minPrice = minPrice
      this.maxPrice = maxPrice
  }

}