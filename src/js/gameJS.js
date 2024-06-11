class Game {
  constructor() {
    this.widget = document.querySelectorAll(".impactField");
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
    const content = this.widget.item(0).innerHTML
    let id = Math.floor(Math.random() * 16);
    let lastElemId = 0;
    setInterval(() => {
      this.widget.item(lastElemId).innerHTML = '';
      this.widget.item(id).innerHTML = content;
      lastElemId = id;
      id = this.randomId(id);
    }, 1000);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const widget = new Game();
  widget.replaceField();
});
