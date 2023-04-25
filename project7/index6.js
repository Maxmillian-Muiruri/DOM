// variables

let openBtn = document.getElementById("open-btn");
let modelcontainer = document.getElementById("model-container");
let closeBtn = document.getElementById("close-btn");

// Event listener'
openBtn.addEventListener("click", function () {
  modelcontainer.style.diplay = "block";
});

closeBtn.addEventListener("click", function () {
  modelcontainer.style.display = "none";
});

window.addEventListener("click", function (e) {
  if (e.target === modelcontainer) {
    modelcontainer.style.display = "none";
  }
});
