import { Controller } from "@hotwired/stimulus"
import { createConsumer } from "@rails/actioncable"

export default class extends Controller {
  connect() {
    this.channel = createConsumer().subscriptions.create("ChatChannel", {
      received: this.received.bind(this)
    })
  }

  received(data) {
    const messages = document.getElementById('messages')
    messages.insertAdjacentHTML('beforeend', data.message)
  }
}
