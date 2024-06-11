class Game {
  constructor() {
    this.widget = document.querySelectorAll(".impactField");
    this.image = document.querySelector("img");
  }

  addGameField() {
    let field = document.createElement("td");
    field.classList.add("impactField");
    let table_row = document.createElement("tr");
    const table = document.createElement("table");
    const count = 0;
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        table_row.appendChild(field);
        field = document.createElement("td");
        field.classList.add("impactField");
      }
      table.appendChild(table_row);
      table_row = document.createElement("tr");
    }
    document.body.appendChild(table);
  }

  randomId(last_id) {
    const new_id = Math.floor(Math.random() * 16);
    if (new_id === last_id) {
      this.randomId(last_id);
    } else {
      return new_id;
    }
  }

  replaceField() {
    this.widget = document.querySelectorAll(".impactField");
    const content = this.image;
    let id = Math.floor(Math.random() * 16);
    setInterval(() => {
      this.image.classList.remove("invisible");
      this.widget.item(id).appendChild(content);
      id = this.randomId(id);
    }, 1000);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const widget = new Game();
  widget.addGameField();
  widget.replaceField();
});
