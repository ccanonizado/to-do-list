import { LitElement, html } from "lit-element";
import { styles } from "./styles/styles";
import "./components/ListTitle";
import "./components/ListItem";

export class App extends LitElement {
  static get properties() {
    return {
      list: { type: Array },
      input: { type: String }
    };
  }

  static get styles() {
    return [styles];
  }

  constructor() {
    super();
    this.list = ["This is task number 1", "This is task number 2"];
    this.input = "";
  }

  handleSubmit(e) {
    if (e.target.value !== "") {
      if (e.key === "Enter") {
        this.createItem();
      }
    }
  }

  handleInput(e) {
    this.input = e.target.value;
  }

  createItem() {
    if (this.input !== "") {
      this.list = [...this.list, this.input];
      this.input = "";
    }
  }

  deleteItem(index) {
    this.list = this.list.filter((item, key) => key !== index);
  }

  render() {
    return html`
      <list-title></list-title>

      ${this.list.length <= 0
        ? html`
            <p class="input-label">No tasks yet! Create one here:</p>
          `
        : html`
            <p class="input-label">Create another task:</p>
          `}

      <div class="block-input">
        <input
          type="text"
          class="input-res"
          .value=${this.input}
          @input=${this.handleInput}
          @keypress=${this.handleSubmit}
        />
      </div>

      <div class="center">
        <button class="btn btn-transition" @click=${this.createItem}>
          Add Task
        </button>
      </div>

      ${this.list.map((item, key) => {
        return html`
          <list-item
            item=${item}
            .deleteItem=${this.deleteItem.bind(this, key)}
          ></list-item>
        `;
      })}
    `;
  }
}

customElements.define("to-do-list", App);
