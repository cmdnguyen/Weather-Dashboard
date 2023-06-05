var cityNameBtn = getElementbyId("cityNameButton");
var searchCityBtn = getElementbyId ("searchCityButton") 
var displayCityWx = getElementbyId("displayCityWX");
var displayCity = getElementbyId("displayCityName");

var currentTemp = getElementbyId("currentTemp");
var currentWind = getElementbyId("currentWind");
var currentHumidity = getElementbyId("currentHumidity");

var fiveDayWx = getElementbyId("fiveDayWXCard");
var fiveDayWxDay = getElementbyId("fiveDayWxDay");
var fiveDayTemp = getElementbyId("fiveDayTemp");
var fiveDayWind = getElementbyId("fiveDayWind");
var fiveDayHumidity = getElementbyId("fiveDayHumidity");

var today = day.js()
var weatherURL = "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}";

fetch(weatherUrl)
.then(function (response) {
  return response.json();
})

function searchCity () {

}

function saveCity(){

}

function displayCity(){

}

function displayFiveDay(){

}

searchCityBtn.addEventListener("click", searchCity);
cityNameBtn.addEventListener("click", displayCity);