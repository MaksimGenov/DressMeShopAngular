import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SizeService } from 'src/app/services/size-service/size.service';
import { NotificationService } from 'src/app/services/notification-service/notification.service';

@Component({
  selector: 'app-add-size-form',
  templateUrl: './add-size-form.component.html',
  styleUrls: ['./add-size-form.component.css']
})
export class AddSizeFormComponent implements OnInit {
  size: FormControl

  constructor(private sizeService: SizeService, private notificationService: NotificationService) { }

  ngOnInit() {
    this.size = new FormControl()
  }

  onSubmit() {
    let size  = {name: this.size.value}
    this.sizeService.create(size)
    .subscribe(size => this.notificationService.pop("success", "Size: " + size.name + " added successuflly."))
  }

}
