import { LitElement, html } from "lit-element";
import { styles } from "../styles/styles";

export class ListItem extends LitElement {
  static get properties() {
    return {
      item: { type: String },
      deleteItem: { type: Function }
    };
  }

  static get styles() {
    return [styles];
  }

  render() {
    return html`
      <div class="block-item">
        <div class="item-res">
          ${this.item}
        </div>

        <button class="btn-x btn-x-transition" @click=${this.deleteItem}>
          X
        </button>
      </div>
    `;
  }
}

customElements.define("list-item", ListItem);
