let today = new Date();
console.log(today);
today.getDate();
today.getDay();
let hours = today.getHours().toString().padStart(2, "0");
console.log(hours);

let minutes = today.getMinutes().toString().padStart(2, "0");
console.log(minutes);

let time = hours + ":" + minutes;
console.log(time);

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
console.log();
let date = days[today.getDay()] + ", " + time;
console.log(date);
let h5 = document.querySelector("#today");
h5.innerHTML = date;

function searchCity(event) {
  event.preventDefault();
  let input = document.querySelector("#city");
  console.log(input.value);
  let h1 = document.querySelector("h1");
  h1.innerHTML = input.value;
}
let form = document.querySelector("form");
form.addEventListener("submit", searchCity);

function convertToFahrenheit(event) {
  event.preventDefault();
  let fahrenheit = 60;
  console.log(fahrenheit);
  let h2 = document.querySelector("#tempToday");
  h2.innerHTML = fahrenheit;
}
let a = document.querySelector("#fahrenheit");
a.addEventListener("click", convertToFahrenheit);
