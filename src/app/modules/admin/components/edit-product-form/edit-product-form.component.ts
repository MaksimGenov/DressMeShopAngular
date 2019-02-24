import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Brand } from 'src/app/models/Brand';
import { Category } from 'src/app/models/Category';
import { ProductService } from 'src/app/services/product-service/product.service';
import { BrandService } from 'src/app/services/brand-service/brand.service';
import { CategoryService } from 'src/app/services/category-service/category.service';
import { ImageService } from 'src/app/services/image-service/image.service';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-edit-product-form',
  templateUrl: './edit-product-form.component.html',
  styleUrls: ['./edit-product-form.component.css']
})
export class EditProductFormComponent implements OnInit {
  form: FormGroup
  availableBrands: Brand[]
  availableCategories: Category[]
  selectedCategories: string[] = []
  imagesPreviewUrl: string[] = []
  images: File[] = []
  productId: string;
  
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private brandService: BrandService,
    private categoryService: CategoryService,
    private imageService: ImageService,
  ) { }

  ngOnInit() {
    this.loadCategories()
    this.loadBrands()
    this.loadProduct()
  }
  
  loadProduct(): any {
    this.productId = this.route.snapshot.params.id
    this.productService.get(this.productId).subscribe(response => this.initForm(response.body))
  }

  loadCategories(): void {
    this.categoryService.getPage({}).subscribe(
      response => this.availableCategories = response.body.content
    )
  }

  loadBrands(): void {
    this.brandService.getPage({}).subscribe(
      response => this.availableBrands = response.body.content
    )
  }

  initForm(product: Product): void {
    this.form = new FormGroup({
      model: new FormControl(product.model, Validators.required),
      description: new FormControl(product.description, Validators.required),
      brand: new FormControl(product.brand.name, Validators.required),
      categories: new FormControl(product.categories.map(c => c.name), Validators.required),
      color: new FormControl(product.color, Validators.required),
      price: new FormControl(product.price, Validators.required),
    })
  }

  isFormControlInvalid(name: string) {
    return this.form.get(name).invalid
  }

  isFormControlTouched(name: string) {
    return this.form.get(name).touched
  }

  async onFileChange(event) {
    this.imagesPreviewUrl = []
    this.images = Array.from(event.target.files)
    this.imagesPreviewUrl = await Promise.all(this.images.map(image => this.imageService.generateImagePreviewUrl(image)))
  }

  selectCategory(event) {
    let name = event.target.value
    if (this.selectedCategories.includes(name)) {
      let index = this.selectedCategories.indexOf(name)
      this.selectedCategories.splice(index, 1)
    } else {
      this.selectedCategories.push(name)
    }

    this.form.get('categories').setValue(this.selectedCategories)
  }

  onSubmit(event) {
    let product = Object.assign({}, this.form.value)
    product['id'] = this.productId

    this.productService.edit(product, this.images)
  }
}
