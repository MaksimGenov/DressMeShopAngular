import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BrandService } from '../../../../services/brand-service/brand.service';
import { ImageService } from '../../../../services/image-service/image.service';
import { NotificationService } from '../../../../services/notification-service/notification.service';

@Component({
  selector: 'app-add-brand-form',
  templateUrl: './add-brand-form.component.html',
  styleUrls: ['./add-brand-form.component.css']
})
export class AddBrandFormComponent implements OnInit{
  image: File
  imagePreviewUrl: string
  form: FormGroup

  constructor(
    private brandService: BrandService,
    private imageService: ImageService,
    private notificationService: NotificationService
  ) {
    this.onSuccess = this.onSuccess.bind(this)
    this.onError = this.onError.bind(this)
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      image: new FormControl(null, Validators.required)
    })
  }

  get name() { return this.form.get('name') }

  get file() { return this.form.get('image') }

  get description() { return this.form.get('description') }

  onSubmit(event) {
    let brand = this.form.value
    brand.image = this.image
    this.brandService.create(brand).subscribe(this.onSuccess, this.onError)
  }

  async onFileChange(event) {
    this.imagePreviewUrl = ''
    this.image = event.target.files[0]
    this.imagePreviewUrl = await this.imageService.generateImagePreviewUrl(this.image)
  }

  onSuccess() {
    this.resetForm()
    this.notificationService.success('Brand added successfully!')
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