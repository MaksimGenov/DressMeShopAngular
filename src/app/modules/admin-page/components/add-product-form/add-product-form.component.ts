import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Category } from '../../../../models/Category';
import { Brand } from '../../../../models/Brand';
import { BrandService } from '../../../../services/brand-service/brand.service';
import { CategoryService } from '../../../../services/category-service/category.service';
import { ImageService } from '../../../../services/image-service/image.service';
import { ProductService } from '../../../../services/product-service/product.service';
import { NotificationService } from '../../../../services/notification-service/notification.service';

@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html',
  styleUrls: ['./add-product-form.component.css']
})
export class AddProductFormComponent implements OnInit {
  private availableCategories$: Observable<Category[]>
  private availableBrands$: Observable<Brand[]>
  private images: File[] = []
  private imagesPreviewUrl: string[] = []
  private selectedCategories: string[] = []
  private addProductForm: FormGroup

  constructor(
    private brandService: BrandService,
    private categoryService: CategoryService,
    private imageService: ImageService,
    private productService: ProductService,
    private notificationService: NotificationService
  ) {
    this.addProductForm = new FormGroup({
      model: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      color: new FormControl('', [Validators.required]),
      price: new FormControl(null, [Validators.required]),
      brand: new FormControl('', [Validators.required]),
      files: new FormControl('', [Validators.required]),
      categories: new FormControl({ value: '', disabled: true }, Validators.required)
    })
  }

  ngOnInit() {
    this.availableBrands$ = this.brandService.getAllBrands()
    this.availableCategories$ = this.categoryService.getAllCategories()
  }

  get brand() { return this.addProductForm.get('brand') }

  get model() { return this.addProductForm.get('model') }

  get description() { return this.addProductForm.get('description') }

  get color() { return this.addProductForm.get('color') }

  get price() { return this.addProductForm.get('price') }

  get files() { return this.addProductForm.get('files') }

  get categories() { return this.addProductForm.get('categories') }

  onSubmit() {
    let model: string = this.model.value
    let description: string = this.description.value
    let price: string = this.price.value
    let color: string = this.color.value
    let brand: string = this.brand.value

    this.productService.createProduct(brand, model, description, price, color, this.selectedCategories, this.images)
      .subscribe(
        () => {
          this.addProductForm.reset();
          this.images = [];
          this.selectedCategories = [];
          this.imagesPreviewUrl = [];
          this.notificationService.pop('success', 'Products created successfully!');
        },
        error => {
          console.log(error)
          this.notificationService.pop('error', error.error)
        }
      )
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
}
