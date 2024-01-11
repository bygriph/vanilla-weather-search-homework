function displayCity(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
    let city = document.querySelector("#city-input");
    city.innerHTML = searchInput.value;
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", displayCity);