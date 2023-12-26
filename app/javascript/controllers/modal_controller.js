import { Controller } from "@hotwired/stimulus"
import $ from "jquery"; 

export default class extends Controller {
  static targets = [
    'modal'
  ]

  async show(e) {
    e.preventDefault()
    const modalId = e.target.getAttribute("data-modal-id");
    const modal = document.getElementById(modalId);
    const reasonId = e.currentTarget.dataset.id
    // Populate modal content or perform other actions based on the clicked item
    modal.classList.remove("hidden");
    modal.setAttribute("aria-hidden", "false");
    const reasonDetails = await this.fetchReasonDetails(reasonId);

    // Update modal content with pre-filled data
    this.updateModalContent(modalId, reasonDetails);
  }

  async fetchReasonDetails(reasonId) {
    let res;
    try {
      await $.ajax({
        headers: {
          // Include the CSRF token in the headers
          "X-CSRF-Token": $('meta[name="csrf-token"]').attr("content"),
        },
        url: "/reasons/"+reasonId,
        type: 'GET',
        dataType: "json",
        data: {
          id: reasonId
        },
        success: function(response){
          res = response
        },
      });
    } catch (error) {
      console.error(error);
      // Handle error, e.g., show an alert to the user
      return {};
    }
    return res;
  }

  updateModalContent(modalId, reasonDetails) {
    const modal = document.getElementById(modalId);
  
    // Update form fields with pre-filled data
    modal.querySelector('input[name="storefront[reasons_attributes][7][label]"]').value = reasonDetails.label;
    modal.querySelector('input[name="storefront[reasons_attributes][7][code]"]').value = reasonDetails.code;
    // Add other fields as needed
  }

  hide(e) {
    e.preventDefault()
    const modalId = e.target.getAttribute("data-modal-id");
    const modal = document.getElementById(modalId);
    modal.classList.add("hidden");
    modal.setAttribute("aria-hidden", "true");
    // this.modalTarget.querySelectorAll('x-transition').forEach((transition) => {
    //   transition.open = false
    // })
    // this.modalTarget.open = false

    // document.querySelector('.desktop-overlay').style.zIndex = 1
    // this.dispatch('closed')
  }
}