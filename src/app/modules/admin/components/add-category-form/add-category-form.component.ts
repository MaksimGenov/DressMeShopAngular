import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CategoryService } from '../../../../services/category-service/category.service';
import { ImageService } from '../../../../services/image-service/image.service';
import { NotificationService } from '../../../../services/notification-service/notification.service';

@Component({
  selector: 'app-add-category-form',
  templateUrl: './add-category-form.component.html',
  styleUrls: ['./add-category-form.component.css']
})
export class AddCategoryFormComponent {
  image: File
  imagePreviewUrl: string
  addCategoryForm = new FormGroup({
    name: new FormControl('', Validators.required),
    file: new FormControl(null, Validators.required)
  })
  constructor(
    private categoryService: CategoryService,
    private imageService: ImageService,
    private notificationService: NotificationService
  ) { }

  get name() { return this.addCategoryForm.get('name') }

  get file() { return this.addCategoryForm.get('file') }

  onSubmit() {
    let name: string = this.name.value
    this.categoryService.create(name, this.image)
      .subscribe(
        brand => {
        this.image = null
        this.imagePreviewUrl = null
        this.addCategoryForm.reset()
        this.notificationService.pop('success', "Category added successfully!")
      },
      error => this.notificationService.pop('error', error.error)
    )
  }

  async onFileChange(event) {
    this.imagePreviewUrl = ''
    this.image = event.target.files[0]
    this.imagePreviewUrl = await this.imageService.generateImagePreviewUrl(this.image)
  }
}
