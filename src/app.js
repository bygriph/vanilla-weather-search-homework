function refreshWeather(response) {
let temperatureElement = document.querySelector("#temperature");
let temperature = response.data.temperature.current;
let city = document.querySelector("#city-input");

city.innerHTML = response.data.city;
temperatureElement.innerHTML = Math.round(temperature);
 
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

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", displayCity);

searchCity("Oslo")