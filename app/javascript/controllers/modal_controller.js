import { Controller } from "@hotwired/stimulus"
export default class extends Controller {
  static targets = [
    'modal',
    'editButton'
  ]

  show(e) {
    e.preventDefault()
    const modalId = e.target.getAttribute("data-modal-id");
    const modal = document.getElementById(modalId);
    const reasonId = e.currentTarget.dataset.id
    // Populate modal content or perform other actions based on the clicked item
    // const reasonDetails = await this.fetchReasonDetails(reasonId);

    // // Update modal content with pre-filled data
    // debugger
    // this.updateModalContent(modalId, reasonDetails);

    modal.classList.remove("hidden");
    modal.setAttribute("aria-hidden", "false");
  }

  // Add other methods as needed

  fetchAndPopulateModalContent(itemId) {
    // Fetch and populate modal content based on itemId
    // You can use AJAX or any method you prefer to load content dynamically
  }
}
