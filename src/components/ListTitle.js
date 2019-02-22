import { LitElement, html } from "lit-element";
import { styles } from "../styles/styles";

export class ListTitle extends LitElement {
  static get styles() {
    return [styles];
  }

  render() {
    return html`
      <div class="title-bar">
        <h1>To Do List</h1>
      </div>
    `;
  }
}

customElements.define("list-title", ListTitle);
