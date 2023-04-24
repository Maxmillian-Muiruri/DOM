// variables

let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");

let person = document.querySelector(".person");

const quotes = [
  {
    quote:
      "The best way to find your self is to lose yourself in the service other",
    person: "Maxmillian",
  },
  {
    quote:
      "If you want to live a happy life, do it to a goal, not to people o things",
    person: "muiruri",
  },
  {
    quote:
      "'Your time is limited so dont waste it living someone else's life.'",
    person: "john",
  },
];

btn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * quotes.length);
  quote.InnerText = quotes[random].quote;
  person.InnerText = quotes[random].person;
});
