import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { }

  error(message: string) {
    this.pop('error', message)
  }

  success(message: string) {
    this.pop('success', message)
  }

  warning(message: string) {
    this.pop('warning', message)
  }

  private pop(type: string, message: string) {
    let element = document.getElementById('notification')
    element.style.display = "block"
    switch (type) {
      case 'success': element.style.backgroundColor = 'green'
        break
      case 'error': element.style.backgroundColor = 'red'
        break
      case 'warning': element.style.backgroundColor = 'yellow'
        break
    }
    element.innerText = message
    setTimeout(() => { element.style.display = "none" }, 5000)
  }
}
