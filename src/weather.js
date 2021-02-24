/*
API to get the weather data from OpenWeather
Usage:
import getWeatherData from './weather.js'
getWeatherData('cityName').then((data)=>{//use data here}).catch(console.log);
*/

import APIkey from './OpenWeatherAPIKey'

const getWeatherData = async (cityName) => {
  const response = await fetch(
    "http://api.openweathermap.org/data/2.5/weather?q=" +
      cityName +
      "&appid=" +
      APIkey
  );
  const data = await response.json();
  return data;
};

export default getWeatherData;