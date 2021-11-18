let apiKey = "80062fa4f5363b47d57b65786d914929";

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
  let h2 = document.querySelector("h2");
  h2.innerHTML = `${response.data.main.temp}°C`;
}

function searchCity(event) {
  event.preventDefault();
  let city = document.querySelector("#city");
  console.log(city.value);
  let h1 = document.querySelector("h1");
  h1.innerHTML = city.value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=80062fa4f5363b47d57b65786d914929&units=metric`;
  axios.get(apiUrl).then(showCurrentWeather);
}
let form = document.querySelector("form");
form.addEventListener("submit", searchCity);
