import { LitElement, html } from "lit-element";
import { styles } from "./styles/styles";
import "./components/ListTitle";
import "./components/ListItem";
import { db } from "./firebase";

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
    this.list = [];
    this.input = "";
    this.getTasks();
  }

  handleSubmit(e) {
    if (e.target.value !== "") {
      if (e.key === "Enter") {
        this.createTask();
      }
    }
  }

  handleInput(e) {
    this.input = e.target.value;
  }

  async getTasks() {
    try {
      const snapshot = await db.collection("tasks").get();
      snapshot.forEach(doc => {
        let task = { title: doc.data().title, dateAdded: doc.data().dateAdded };
        this.list.push(task);
      });
      this.requestUpdate();
    } catch (e) {
      console.log(e);
    }
  }

  async createTask() {
    if (this.input !== "") {
      let title = this.input;
      this.input = "Loading...";
      try {
        let task = { title: title, dateAdded: new Date() };
        await db.collection("tasks").add(task);
        this.list.push(task);
        this.input = "";
      } catch (e) {
        console.log(e);
      }
    }
  }

  async deleteTask(index) {
    try {
      let task = this.list[index];
      await db
        .collection("tasks")
        .doc(task.title)
        .delete();
      this.list = this.list.filter((item, key) => key !== index);
    } catch (e) {
      console.log(e);
    }
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
        <button class="btn btn-transition" @click=${this.createTask}>
          Add Task
        </button>
      </div>

      ${this.list.length > 0
        ? html`
            ${this.list.map((task, key) => {
              return html`
                <list-item
                  title=${task.title}
                  date=${task.dateAdded}
                  .deleteTask=${this.deleteTask.bind(this, key)}
                ></list-item>
              `;
            })}
          `
        : null};
    `;
  }
}

customElements.define("to-do-list", App);
