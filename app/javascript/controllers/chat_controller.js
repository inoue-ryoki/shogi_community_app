import { Controller } from "stimulus"
import consumer from "../channels/consumer"

export default class extends Controller {
  connect() {
    this.channel = consumer.subscriptions.create("ChatChannel", {
      received: (data) => {
        this.element.insertAdjacentHTML("beforeend", `<p><b>${data.user}:</b> ${data.message}</p>`)
      }
    })
  }
}
