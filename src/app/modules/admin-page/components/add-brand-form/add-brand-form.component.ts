import { Component, OnInit, ViewChild, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { BrandService } from '../../../../services/brand-service/brand.service';
import { ImageService } from '../../../../services/image-service/image.service';

@Component({
  selector: 'app-add-brand-form',
  templateUrl: './add-brand-form.component.html',
  styleUrls: ['./add-brand-form.component.css']
})
export class AddBrandFormComponent {
  image: File
  imagePreviewUrl: string
  addBrandForm = new FormGroup({
    name: new FormControl('', Validators.required),
    file: new FormControl(null, Validators.required),
    description: new FormControl('', Validators.required)
  })

  constructor(private brandService: BrandService, private imageService: ImageService) { }

  get name() { return this.addBrandForm.get('name') }

  get file() { return this.addBrandForm.get('file') }

  get description() { return this.addBrandForm.get('description') }

  onSubmit(event) {
    let name: string = this.name.value
    let description: string = this.description.value
    this.brandService.addBrand(name, description, this.image)
    .subscribe(brand => {
      this.image = null
      this.imagePreviewUrl = null
      this.addBrandForm.reset()
    })
  }

  async onFileChange(event) {
    this.imagePreviewUrl = ''
    this.image = event.target.files[0]
    this.imagePreviewUrl = await this.imageService.generateImagePreviewUrl(this.image)
  }
}