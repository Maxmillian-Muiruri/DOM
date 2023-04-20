// DOM manipulation

// Event Listeners

// using addEventListener method
// element.addEventListener("click", function);

let buttonTwo = document.querySelector(".btn-2");

function alertBtn() {
  alert("I also love javascript");
}
buttonTwo.addEventListener("click", alertBtn);

// mouseover
const newBackgroundColor = document.querySelector(".box-3");
function changeBgColor() {
  newBackgroundColor.style.backgroundColor = "blue";
}
newBackgroundColor.addEventListener("mouseover", changeBgColor);
