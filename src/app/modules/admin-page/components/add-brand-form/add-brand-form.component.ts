import { Component, OnInit, ViewChild, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { BrandService } from '../../../../services/brand-service/brand.service';
import { ImageService } from '../../../../services/image-service/image.service';
import { NotificationService } from '../../../../services/notification-service/notification.service';

@Component({
  selector: 'app-add-brand-form',
  templateUrl: './add-brand-form.component.html',
  styleUrls: ['./add-brand-form.component.css']
})
export class AddBrandFormComponent {
  image: File
  imagePreviewUrl: string
  form: FormGroup

  constructor(
    private brandService: BrandService,
    private imageService: ImageService,
    private notificationService: NotificationService
  ) {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      file: new FormControl(null, Validators.required),
      description: new FormControl('', Validators.required)
    })
  }

  get name() { return this.form.get('name') }

  get file() { return this.form.get('file') }

  get description() { return this.form.get('description') }

  onSubmit(event) {
    let name: string = this.name.value
    let description: string = this.description.value
    this.brandService.addBrand(name, description, this.image)
      .subscribe(
        brand => {
          this.image = null
          this.imagePreviewUrl = null
          this.form.reset()
          this.notificationService.pop('success', 'Brand added successfully!')
        },
        error => {this.notificationService.pop('error', error.error)}
      )
  }

  async onFileChange(event) {
    this.imagePreviewUrl = ''
    this.image = event.target.files[0]
    this.imagePreviewUrl = await this.imageService.generateImagePreviewUrl(this.image)
  }
}