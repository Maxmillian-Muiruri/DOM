document.querySelector("#sports").addEventListener("click", function (e) {
  console.log(e.target.getAtrribute("id") + " is clicked");

  const target = e.target;

  if (target.matches("li")) {
    target.style.background = "red";
  }
});
const sports = document.querySelector("#sports");
const newSport = document.createElement("li");

newSports.innerText = "rugby";
newSports.setAttribute("id", "rugby");

sports.appendChild(newSport);
