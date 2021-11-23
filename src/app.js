let apiKey = "80062fa4f5363b47d57b65786d914929";

let today = new Date();
today.getDate();
today.getDay();
let hours = today.getHours().toString().padStart(2, "0");
let minutes = today.getMinutes().toString().padStart(2, "0");
let time = hours + ":" + minutes;
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let date = days[today.getDay()] + ", " + time;
let h5 = document.querySelector("#today");
h5.innerHTML = date;

function showCurrentWeather(response) {
  console.log(response.data.main.temp);
  let h2 = document.querySelector("h2");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let descriptionElement = document.querySelector("#description");
  let iconElement = document.querySelector("#icon");
  h2.innerHTML = Math.round(response.data.main.temp) + "°C";
  humidityElement.innerHTML =
    " Humidity: " + Math.round(response.data.main.humidity) + "%";
  windElement.innerHTML = `Wind: ${Math.round(response.data.wind.speed)} km/h`;
  descriptionElement.innerHTML = response.data.weather[0].description;
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
}

function searchCity(event) {
  event.preventDefault();
  let city = document.querySelector("#city");
  console.log(city.value);
  let h1 = document.querySelector("h1");
  h1.innerHTML = city.value;
}
let form = document.querySelector("form");
form.addEventListener("submit", searchCity, showCurrentWeather);

function search(city) {
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=80062fa4f5363b47d57b65786d914929&units=metric`;
  axios.get(apiUrl).then(showCurrentWeather);
  let h1 = document.querySelector("h1");
  h1.innerHTML = city;
}

search("Lisbon");
