let apiKey = "96d633fc4214e0a6d2d5b7ff2565aba7";

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

function showCurrentWeather(response) {
  console.log(response.data.main.temp);
  let h2 = document.querySelector("#temp");
  h2.innerHTML = `$(response.data.main.temp)°C`;
}

function searchCity(event) {
  event.preventDefault();
  let city = document.querySelector("#city");
  console.log(city.value);
  let h1 = document.querySelector("h1");
  h1.innerHTML = city.value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=96d633fc4214e0a6d2d5b7ff2565aba7&units=metric`;
  axios.get(apiUrl).then(showCurrentWeather);
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
