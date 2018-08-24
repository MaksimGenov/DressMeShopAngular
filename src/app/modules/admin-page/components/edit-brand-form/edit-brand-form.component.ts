import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BrandService } from '../../../../services/brand-service/brand.service';
import { ImageService } from '../../../../services/image-service/image.service';

@Component({
  selector: 'app-edit-brand-form',
  templateUrl: './edit-brand-form.component.html',
  styleUrls: ['./edit-brand-form.component.css']
})
export class EditBrandFormComponent implements OnInit {
  image: File
  imagePreviewUrl: string
  form: FormGroup
  private brandId: string

  constructor(
    private brandService: BrandService,
    private imageService: ImageService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.brandId = params.id
      this.brandService.getById(this.brandId)
        .subscribe(brand => {
          this.form = new FormGroup({
            name: new FormControl(brand.name, Validators.required),
            file: new FormControl(null),
            description: new FormControl(brand.description, Validators.required)
          })
        })
    })
  }

  get name() { return this.form.get('name') }

  get file() { return this.form.get('file') }

  get description() { return this.form.get('description') }

  onSubmit(event) {
    this.brandService.edit(this.brandId, this.name.value, this.description.value, this.image)
  }

  async onFileChange(event) {
    this.imagePreviewUrl = ''
    this.image = event.target.files[0]
    this.imagePreviewUrl = await this.imageService.generateImagePreviewUrl(this.image)
  }
}
