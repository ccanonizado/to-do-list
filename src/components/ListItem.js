import { LitElement, html } from "lit-element";
import { styles } from "../styles/styles";
import moment from "moment";

export class ListItem extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      date: { type: String },
      deleteTask: { type: Function }
    };
  }

  static get styles() {
    return [styles];
  }

  render() {
    return html`
      <div class="block-item">
        <div class="item-res">
          ${this.title}
          <span class="date"
            >&nbsp;(Added ${moment(this.date.toDate).fromNow()})</span
          >
        </div>

        <button class="btn-x btn-x-transition" @click=${this.deleteTask}>
          X
        </button>
      </div>
    `;
  }
}

customElements.define("list-item", ListItem);
