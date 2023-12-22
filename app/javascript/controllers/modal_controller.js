import { Controller } from "@hotwired/stimulus"
export default class extends Controller {
  static targets = [
    'modal',
    'editButton'
  ]

  show(e) {
    e.preventDefault();

    const itemId = this.editButtonTarget.dataset.id;

    // Assuming you have a method to fetch and populate modal content based on itemId
    this.fetchAndPopulateModalContent(itemId);

    this.modalTarget.open = true;
    document.querySelector('.desktop-overlay').style.zIndex = 0;

    this.modalTarget.querySelectorAll('x-transition').forEach((transition) => {
      transition.open = true;
    });
  }

  // Add other methods as needed

  fetchAndPopulateModalContent(itemId) {
    // Fetch and populate modal content based on itemId
    // You can use AJAX or any method you prefer to load content dynamically
  }
}
