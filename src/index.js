import getWeatherData from "./weather.js";

(() => {
  // DOM cache
  let cityTextInput = document.querySelector("#cityTextInput");
  let searchCityButton = document.querySelector("#searchCityButton");
  let tempDisplay = document.querySelector(".tempDisplay");
  let feelsLikeDisplay = document.querySelector(".feelsLikeDisplay");
  let descriptionDisplay = document.querySelector(".descriptionDisplay");
  let locationDisplay = document.querySelector(".locationDisplay");

  //Set triggers
  searchCityButton.addEventListener("click", refreshTemp);

  //Functions

  //Refreshes the temperature
  async function refreshTemp(city) {
    if (cityTextInput.value == "") cityTextInput.value = "Mumbai";

    getWeatherData(cityTextInput.value)
      .then((data) => {
        cityTextInput.value = data.name;
        updateDisplay(data);
      })
      .catch(console.log);
  }

  function updateDisplay(data) {
    locationDisplay.innerText = data.name + ", " + data.sys.country;
    tempDisplay.innerText = (data.main.temp-273.15).toFixed(2);
    feelsLikeDisplay.innerText = (data.main.feels_like-273.15).toFixed(2);
    descriptionDisplay.innerText = data.weather[0].description;
  }

  //Initialization
  refreshTemp("Mumbai");
})();
