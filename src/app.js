function refreshWeather(response) {
let temperatureElement = document.querySelector("#temperature");
let temperature = response.data.temperature.current;
let cityElement = document.querySelector("#city-input");
let descriptionElement = document.querySelector("#description");
let humidityElement = document.querySelector("#humidity");
let windSpeedElement = document.querySelector("#wind-speed");
let timeElement = document.querySelector("#time");
let date = new Date(response.data.time * 1000);
let iconElement = document.querySelector("#icon");

iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-app-icon" />`;
cityElement.innerHTML = response.data.city;
timeElement.innerHTML = formatDate(date);
descriptionElement.innerHTML = response.data.condition.description;
humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
windSpeedElement.innerHTML = `${response.data.wind.speed}km/h`;
temperatureElement.innerHTML = Math.round(temperature);
 
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday", 
    "Monday", 
    "Tuesday", 
    "Wednesday", 
    "Thursday", 
    "Friday",
    "Saturday"
  ];
  let day = days[date.getDay()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${day} ${hours}:${minutes}`;
}

function searchCity(city) {
  let apiKey = "d3e8e8a5a1o40279fb06ta0bd3b0fb2f";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(refreshWeather);
}

function displayCity(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
   
    searchCity(searchInput.value);
}
function displayForecast(){
let days = ["Sun", "Mon", "Tue", "Wed", "Thu"];
let forecastHtml = "";


days.forEach(function(day) {
forecastHtml =
  forecastHtml +
  `   
      <div class="weather-forecast-day">
      <div class="weather-forecast-date">${day}</div>
       <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png" class="forecast-icon" width="44">
       <div class="forecast-temperatures">
       <span class="forecast-temp-max"> 
        -11°</span>
       <span class="forecast-temp-min"> 
        -20°</span>
      </div>
      </div>
   `;
});

let forecastElement = document.querySelector("#forecast");
forecastElement.innerHTML = forecastHtml;
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", displayCity);

searchCity("Oslo")
displayForecast();