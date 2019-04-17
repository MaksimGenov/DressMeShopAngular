import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { CategoryService } from "src/app/services/category-service/category.service";
import { ImageService } from "src/app/services/image-service/image.service";
import { NotificationService } from "src/app/services/notification-service/notification.service";
import { ActivatedRoute, Router } from "@angular/router";


@Component({
  selector: 'app-edit-category-form',
  templateUrl: './edit-category-form.component.html',
  styleUrls: ['./edit-category-form.component.css']
})
export class EditCategoryFormComponent implements OnInit {
  image: File
  imagePreviewUrl: string
  categoryId: string
  form: FormGroup

  constructor(
    private categoryService: CategoryService,
    private imageService: ImageService,
    private notificationService: NotificationService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.categoryId = this.route.snapshot.params.id
    this.categoryService.get(this.categoryId)
      .subscribe(response => {
        this.form = new FormGroup({
          name: new FormControl(response.body.name, Validators.required),
          file: new FormControl(null),
        })
      })
  }

  get name() { return this.form.get('name') }

  get file() { return this.form.get('file') }

  onSubmit() {
    let category = this.form.value
    category.image = this.image
    category.id = this.categoryId
    this.categoryService.edit(category)
      .subscribe(
        category => {
          this.router.navigateByUrl('/categories')
          this.notificationService.success('Brand updated successuflly!')
        },
        error => this.notificationService.error(error.error)
      )
  }
}
