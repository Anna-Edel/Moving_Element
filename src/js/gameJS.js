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
    let id = Math.floor(Math.random() * 16);
    let lastElemId = id;
    setInterval(() => {
      console;
      this.widget.item(lastElemId).innerHTML = `${lastElemId + 1}`;
      this.widget.item(id).innerHTML = '<img src="goblin.png" alt="">';
      lastElemId = id;
      id = this.randomId(id);
    }, 1000);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const widget = new Game();
  widget.replaceField();
});
