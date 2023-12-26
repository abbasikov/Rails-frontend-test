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
    modal.classList.remove("hidden");
    modal.setAttribute("aria-hidden", "false");
    const reasonDetails = await this.fetchReasonDetails(reasonId);
    this.updateModalContent(modalId, reasonDetails);
  }

  async fetchReasonDetails(reasonId) {
    let res;
    try {
      await $.ajax({
        headers: {
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
      window.alert(error);
    }
    return res;
  }

  updateModalContent(modalId, reasonDetails) {
    const modal = document.getElementById(modalId);
    modal.querySelector('input[name="storefront[reasons_attributes][0][label]"]').value = reasonDetails.label;
    modal.querySelector('input[name="storefront[reasons_attributes][0][code]"]').value = reasonDetails.code;
  }

  hide(e) {
    e.preventDefault()
    const modalId = e.target.getAttribute("data-modal-id");
    const modal = document.getElementById(modalId);
    modal.classList.add("hidden");
    modal.setAttribute("aria-hidden", "true")
  }
}