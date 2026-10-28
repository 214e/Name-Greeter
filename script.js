const TITLE = document.getElementById("title");
const NAME = document.getElementById("nameInput");
let message = ". Have a good day!";
function onBTNclick() {
  TITLE.textContent = "Hello, " + NAME.value + message;
}
