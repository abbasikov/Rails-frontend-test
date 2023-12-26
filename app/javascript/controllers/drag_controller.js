import { Controller } from "@hotwired/stimulus"
import $ from "jquery"; 
import Sortable from "sortablejs"

// Connects to data-controller="drag"
export default class extends Controller {
  connect() {
    this.sortable = Sortable.create(this.element, {
      onEnd: this.end.bind(this)
    })
  }
  end(event){
    let id = event.item.dataset.id
    $.ajax({
      headers: {
        // Include the CSRF token in the headers
        "X-CSRF-Token": $('meta[name="csrf-token"]').attr("content"),
      },
      url: "/reasons/"+id+"/update_order",
      type: 'PATCH',
      dataType: "json",
      data: {
        ordering: event.newIndex + 1
      },
    });
  }
}
