import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CategoryService } from '../../../../services/category-service/category.service';
import { ImageService } from '../../../../services/image-service/image.service';
import { NotificationService } from '../../../../services/notification-service/notification.service';

@Component({
  selector: 'app-add-category-form',
  templateUrl: './add-category-form.component.html',
  styleUrls: ['./add-category-form.component.css']
})
export class AddCategoryFormComponent implements OnInit{
  image: File
  imagePreviewUrl: string
  form: FormGroup

  constructor(
    private categoryService: CategoryService,
    private imageService: ImageService,
    private notificationService: NotificationService
  ) {
    this.onSuccess = this.onSuccess.bind(this)
    this.onError = this.onError.bind(this)
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      image: new FormControl(null, Validators.required)
    }) 
  }

  get name() { return this.form.get('name') }

  get file() { return this.form.get('image') }

  onSubmit() {
    let category = this.form.value
    category.image = this.image
    this.categoryService.create(category).subscribe(this.onSuccess, this.onError)
  }

  async onFileChange(event) {
    this.imagePreviewUrl = ''
    this.image = event.target.files[0]
    this.imagePreviewUrl = await this.imageService.generateImagePreviewUrl(this.image)
  }

  onSuccess() {
    this.resetForm()
    this.notificationService.success("Category added successfully!")
  }

  onError(error) {
    this.notificationService.error(error.error)
  }

  resetForm() {
    this.image = null
    this.imagePreviewUrl = null
    this.form.reset()
  }
}
