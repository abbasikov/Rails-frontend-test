import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["addItem", "template"]
  static values = { index: String }

  addAssociation(event) {
    console.log('addAssociation')
    event.preventDefault()
    console.log(this.indexValue);
    const child_index_name = this.indexValue
    const content = this.templateTarget.innerHTML.replace(new RegExp(child_index_name, "g"), new Date().valueOf())
    this.addItemTarget.insertAdjacentHTML('beforebegin', content)
  }

  removeAssociation(event, isRemoveBundle) {
    let item = event
    if (!isRemoveBundle) {
      event.preventDefault()
      item = event.target.closest(".nested-form-wrapper")
    }
    const isBundleItem = item.getAttribute('data-bundle-item')
    const orderClass = this.getInputClass(isBundleItem, isRemoveBundle)
    this.destroyInput(item, orderClass)
    if (!isRemoveBundle && isBundleItem) {
      this.checkBundle(event)
    }
  }
  getInputClass(isBundleItem, isRemoveBundle) {
    return isBundleItem ? '.bundle-destroy' : isRemoveBundle ? '.order-destroy' : ''
  }
  destroyInput(item, orderClass) {
    const destroyInput = item.querySelector(`input${orderClass}[name*='_destroy']`);
    destroyInput.value = 1;
    this.clearRequired(item);
    item.style.display = 'none';
  }
  clearRequired(item) {
    item.querySelectorAll("input[required]").forEach((node) => {
      node.required = false
    })
    item.querySelectorAll("select[required]").forEach((node) => {
      node.required = false
    })
  }

  checkBundle(event) {
    event.preventDefault()
    const itemWrap = event.target.closest('.bundle-items')
    let hasItem = false
    itemWrap.querySelectorAll('.bundle-item').forEach(item => {
      if (item.style.display != 'none')
        hasItem = true
    })
    if (!hasItem) {
      const removeItem = itemWrap.closest('.rma-item-wrap').querySelector('.nested-form-wrapper')
      this.removeAssociation(removeItem, true)
    }
  }
}
