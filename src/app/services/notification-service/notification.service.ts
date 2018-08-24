import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { }

  pop(type: string, message: string) {
    let element = document.getElementById('notification')
    element.hidden = false
    switch (type) {
      case 'success': element.style.backgroundColor = 'green'
        break
      case 'error': element.style.backgroundColor = 'red'
        break
      case 'warning': element.style.backgroundColor = 'yellow'
        break
    }
    element.innerText = message
    setTimeout(() => { element.hidden = true }, 5000)
  }
}
