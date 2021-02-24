import getWeatherData from "./weather.js";

(() => {

  getWeatherData("London")
    .then((data) => {
      console.log(data);
    })
    .catch(console.log);
})();
