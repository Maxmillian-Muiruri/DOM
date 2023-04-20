// const title = document.getElementById("main-heading");

// console.log(title);

// GetElementByClassName()
// const listItem = document.getElementsByClassName("list-items");
// console.log(listItem);

// // getElementByTagName()
// const listItems = document.getElementsByTagName("li");
// console.log(listItems);

// // querySelector()
// // const container = document.querySelector("div");

// // console.log(container);

// // querySelectorAll();

// const container = document.querySelectorAll("div");

// console.log(container);

// DOM manipulation
// styling elements

// const title = document.querySelector("#main-heading");
// title.style.color = "red";
// console.log(title);

// const listItems = document.querySelectorAll(".list-items");

// for (i = 0; i < listItems.length; i++) {
//   listItems[i].style.color = "green";
// }
// console.log(listItems);

// creating Elements

// let ul = document.querySelector("ul");
// const li = document.createElement("li");
// // ased when adding Elements
// ul.append(li);

// console.log();

// modifying the text

// const firstListItem = document.querySelector(".list-items");

// console.log(firstListItem.innerText);
// console.log(firstListItem.textContent);
// console.log(firstListItem.innerHTML);
// li.innerText = "x-man";
// // modifying Atrribute
// // li.setAttribute("id", "main-heading");
// // li.removeAttribute("id");

// // const title = document.querySelector("#main-heading");

// // console.log(title.getAttribute("id"));
// li.classList.remove("list-items");

// console.log(li.classList.contains("list-items"));

// li.remove();

// parent Node Traversal
// console.log(ul.parentNode.parentNode);
// console.log(ul.parentElement.parentElement);
// let html = document.documentElement;
// console.log(html.parentNode);
// console.log(html.parentElement);

// child node universal
// console.log(ul.childNodes);
// console.log(ul.firstChild);
// console.log(ul.lastChild);

// ul.childNodes[1].style.backgroundColor = "blue";

// console.log(ul.children);
// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);
let ul = document.querySelector("ul");
let div = document.querySelector("div");

// console.log(div.childNodes);
console.log(ul.previousElementSibling);
console.log(ul.nextElementSibling);
