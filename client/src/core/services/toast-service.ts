import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToastService {

  constructor() {
    this.createToastContainer();
  }

  private createToastContainer() {
    if (!document.getElementById('toast-container')) {
      const container = document.createElement('div')
      container.id = 'toast-container'
      container.className = 'toast toast-bottom toast-end z-50'
      document.body.appendChild(container)
    }
  }

  private createToastElement(message: string, alertClass: string, duration = 5000) {
    const toastContainer = document.getElementById('toast-container')
    if (!toastContainer) return;

    const toast = document.createElement('div')
    toast.classList.add('alert', alertClass, 'shadow-lg')
    toast.innerHTML = `
      <span>${message}</span>
      <button class="ml-4 btn btn-sm btn-ghost">x</button>
    `

    toast.querySelector('button')?.addEventListener('click', () => {
      toastContainer.removeChild(toast)
    })

    toastContainer.append(toast)

    setTimeout(() => {
      if (toastContainer.contains(toast)) {
        toastContainer.removeChild(toast)
      }
    }, duration)
  }

  success(messagge: string, duration?: number) {
    this.createToastElement(messagge, 'alert-success', duration)
  }

  error(messagge: string, duration?: number) {
    this.createToastElement(messagge, 'alert-error', duration)
  }

  warning(messagge: string, duration?: number) {
    this.createToastElement(messagge, 'alert-warning', duration)
  }

  info(messagge: string, duration?: number) {
    this.createToastElement(messagge, 'alert-info', duration)
  }

}
