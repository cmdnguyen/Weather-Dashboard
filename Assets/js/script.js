var cityNameBtn = document.getElementById("cityNameButton");
var cityNameContainer = document.getElementById("cityNameContainer");
var searchCityBtn = document.getElementById("searchCityButton");
var wxCardPlaceholder = document.getElementById("wxCardPlaceholder");
var currentCityPlaceholder = document.getElementById("currentCityPlaceholder");

function saveSearchHistory(newCity) {
  var myStorage = JSON.parse(localStorage.getItem("history"));
  if (!myStorage) {
    localStorage.setItem("history", JSON.stringify([newCity]));
    return;
  }
  if (myStorage.includes(newCity)) {
    return;
  }
  myStorage.push(newCity);
  if (myStorage.length > 10) {
    myStorage.shift();
  }
  localStorage.setItem("history", JSON.stringify(myStorage));
  populateSearchHistory();
}

//This function gets called when local storage changes or my page loads
function populateSearchHistory() {
  var myStorage = JSON.parse(localStorage.getItem("history"));
  if (!myStorage) {
    return;
  }
  var historyContainer = document.getElementById("cityNameContainer");
  historyContainer.innerHTML = "";
  for (let i = 0; i < myStorage.length; i++) {
    var searchButton = document.createElement("button");
    searchButton.setAttribute("class", "btn btn-info text-white my-1");
    searchButton.innerHTML = myStorage[i];
    searchButton.addEventListener("click", localStorageSearch);
    historyContainer.append(searchButton);
  }
}

function localStorageSearch(event){
  event.preventDefault()
  console.log(event.target.innerHTML)
  fetchWeather(event.target.innerHTML)
}

function makeForecastElements(data) {

  var currentCityWx = document.getElementById("currentCityWx");
  currentCityWx.innerHTML = ""
  var currentCityName = document.createElement("h1");
  var currentIcon = document.createElement("img");
  var currentTemp = document.createElement("p");
  var currentWind = document.createElement("p");
  var currentHumidity = document.createElement("p");


  currentCityName.textContent = data.city.name;
  currentTemp.textContent = "Temp: " + data.list[0].main.temp + "°F";
  currentWind.textContent = "Wind: " + data.list[0].wind.speed + " MPH";
  currentHumidity.textContent = "Humidity: " + data.list[0].main.humidity + "%";

  currentCityWx.append(currentCityName);
  currentCityWx.append(currentIcon);
  currentCityWx.append(currentTemp);
  currentCityWx.append(currentWind);
  currentCityWx.append(currentHumidity);
  currentCityPlaceholder.setAttribute("style", "display: none");


  console.log(data.list[0].main.temp);
  console.log(data.list[0].wind.speed);
  console.log(data.list[0].main.humidity);
  console.log(data.list[0].weather[0].icon);
  var fiveDayForecast = document.getElementById("fiveDayWxContainer");
  fiveDayForecast.innerHTML = ""
  for (var i = 1; i < 6; i++) {
    var iconCode = data.list[i].weather[0].icon;
    var wxIconURL = "https://openweathermap.org/img/w/" + iconCode + ".png";

    currentIcon.setAttribute("src", wxIconURL);

    var fiveDayWxCard = document.createElement("div");
    var fiveDayWxHeader = document.createElement("h3");
    var fiveDayWxIcon = document.createElement("img");
    var fiveDayCardBody = document.createElement("div");
    var fiveDayTemp = document.createElement("p");
    var fiveDayWind = document.createElement("p");
    var fiveDayHumidity = document.createElement("p");


    fiveDayWxHeader.textContent = "Day " + [i]
    fiveDayTemp.textContent = "Temp: " + data.list[i].main.temp + "°F";
    fiveDayWind.textContent = "Wind: " + data.list[i].wind.speed + " MPH";
    fiveDayHumidity.textContent =
      "Humidity: " + data.list[i].main.humidity + "%";

    fiveDayForecast.append(fiveDayWxCard);
    fiveDayWxCard.append(fiveDayWxHeader);
    fiveDayWxCard.append(fiveDayCardBody);
    fiveDayCardBody.append(fiveDayWxIcon);
    fiveDayCardBody.append(fiveDayTemp);
    fiveDayCardBody.append(fiveDayWind);
    fiveDayCardBody.append(fiveDayHumidity);

    fiveDayWxIcon.setAttribute("src", wxIconURL);
    fiveDayWxCard.setAttribute("class", "card bg-light m-3");
    fiveDayWxCard.setAttribute("style", "width: 18rem");
    fiveDayWxHeader.setAttribute("class", "card-header");
    fiveDayCardBody.setAttribute("class", "card-body");
    wxCardPlaceholder.setAttribute("style", "display: none");

    console.log(data.list[i].main.temp);
    console.log(data.list[i].wind.speed);
    console.log(data.list[i].main.humidity);
    console.log(data.list[i].weather[0].icon);
  }
}

function fetchWeather(cityToSearchFor) {
  var APIKey = "7a606e84af306b85d675cea3b62d63d1";
  var weatherURL =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    cityToSearchFor +
    "&units=imperial&appid=" +
    APIKey;

  fetch(weatherURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      makeForecastElements(data);
      saveSearchHistory(data.city.name);
    });
}

function validateSearchInput() {
  var cityInputEl = document.querySelector("#searchCity");
  var city = cityInputEl.value.trim();

  if (city.length < 3) {
    return;
  }
  fetchWeather(city);
}

searchCityBtn.addEventListener("click", validateSearchInput);
populateSearchHistory();