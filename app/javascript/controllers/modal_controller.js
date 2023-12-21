import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [
    'modal'
  ]

  show(e) {
    e.preventDefault();

    this.modalTarget.open = true
    document.querySelector('.desktop-overlay').style.zIndex = 0
    this.modalTarget.querySelectorAll('x-transition').forEach((transition) => {
      transition.open = true
    })
  }

  hide(e) {
    e.preventDefault()

    this.modalTarget.querySelectorAll('x-transition').forEach((transition) => {
      transition.open = false
    })
    this.modalTarget.open = false

    document.querySelector('.desktop-overlay').style.zIndex = 1
    this.dispatch('closed')
  }
}
