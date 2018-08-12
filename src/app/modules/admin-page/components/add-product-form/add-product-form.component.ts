import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Category } from '../../../../models/Category';
import { Brand } from '../../../../models/Brand';
import { BrandService } from '../../../../services/brand-service/brand.service';
import { CategoryService } from '../../../../services/category-service/category.service';
import { ImageService } from '../../../../services/image-service/image.service';
import { ProductService } from '../../../../services/product-service/product.service';

@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html',
  styleUrls: ['./add-product-form.component.css']
})
export class AddProductFormComponent implements OnInit {
  private availableCategories: Category[]
  private availableBrands: Brand[]
  private images: File[] = []
  private imagesPreviewUrl: string[] = []
  private addProductForm = new FormGroup({
    model: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    color: new FormControl('', [Validators.required]),
    price: new FormControl(null, [Validators.required]),
    brand: new FormControl('', [Validators.required]),
    files: new FormControl('', [Validators.required]),
    categories: new FormControl('', [Validators.required])
  })

  constructor(
    private brandService: BrandService,
    private categoryService: CategoryService,
    private imageService: ImageService,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.brandService.getAllBrands().subscribe(brands => this.availableBrands = brands)
    this.categoryService.getAllCategories().subscribe(categories => this.availableCategories = categories)
  }

  get brand() { return this.addProductForm.get('brand') }

  get model() { return this.addProductForm.get('model') }

  get description() { return this.addProductForm.get('description') }

  get color() { return this.addProductForm.get('color') }

  get price() { return this.addProductForm.get('price') }

  get files() { return this.addProductForm.get('files') }

  get categories() { return this.addProductForm.get('categories') }

  onSubmit(event) {
    let model: string = this.model.value
    let description: string = this.description.value
    let price: string = this.price.value
    let color: string = this.color.value
    let brandId: string = this.brand.value
    let categoriesId = this.categories.value
    
    this.productService.createProduct(brandId, model, description, price, color, categoriesId, this.images)
      .subscribe(product => {
        this.addProductForm.reset()
        this.images = []
        this.imagesPreviewUrl = []
      },
      error => console.log(error)
    )
  }

  async onFileChange(event) {
    this.imagesPreviewUrl = []
    this.images = Array.from(event.target.files)
    this.imagesPreviewUrl = await Promise.all(this.images.map(image => this.imageService.generateImagePreviewUrl(image)))
  }
}
