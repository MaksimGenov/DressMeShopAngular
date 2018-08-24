import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from '../../../../services/product-service/product.service';
import { BrandService } from '../../../../services/brand-service/brand.service';
import { CategoryService } from '../../../../services/category-service/category.service';
import { Brand } from '../../../../models/Brand';
import { Category } from '../../../../models/Category';
import { Observable } from 'rxjs';
import { ImageService } from '../../../../services/image-service/image.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-product-form',
  templateUrl: './edit-product-form.component.html',
  styleUrls: ['./edit-product-form.component.css']
})
export class EditProductFormComponent implements OnInit {
  private productId: string
  private form: FormGroup
  private availableBrands$: Observable<Brand[]>
  private availableCategories$: Observable<Category[]>
  private selectedCategories: string[] = []
  private imagesPreviewUrl: string[] = []
  private images: File[] = []
  
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private brandService: BrandService,
    private categoryService: CategoryService,
    private imageService: ImageService,
  ) { }

  ngOnInit() {
    this.availableCategories$ = this.categoryService.getAllCategories()
    this.availableBrands$ = this.brandService.getAllBrands()
    this.route.params.subscribe(params => {
      this.productId = params.id
      this.productService.getProduct(this.productId)
        .subscribe(product => {
          this.selectedCategories = product.categories.map(category => category.name)
          this.form = new FormGroup({
            model: new FormControl(product.model, Validators.required),
            description: new FormControl(product.description, Validators.required),
            brand: new FormControl(product.brand.name, Validators.required),
            categories: new FormControl(this.selectedCategories, Validators.required),
            color: new FormControl(product.color, Validators.required),
            price: new FormControl(product.price, Validators.required),
          })
        })
    })
  }

  get brand() {
    return this.form.get('brand')
  }
  get categories() {
    return this.form.get('categories')
  }
  get model() {
    return this.form.get('model')
  }
  get price() {
    return this.form.get('price')
  }
  get color() {
    return this.form.get('color')
  }
  get description() {
    return this.form.get('description')
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

    this.categories.setValue(this.selectedCategories)
  }

  onSubmit(event) {
    let model: string = this.model.value
    let description: string = this.description.value
    let price: string = this.price.value
    let color: string = this.color.value
    let brand: string = this.brand.value

    this.productService.edit(this.productId, brand, model, description, price, color, this.selectedCategories, this.images)
  }
}
