var cityNameBtn = document.getElementById("cityNameButton");
var cityNameContainer = document.getElementById("cityNameContainer");
var searchCityBtn = document.getElementById ("searchCityButton") 
var currentCityWx = document.getElementById("currentCityWx");
//var currentCity = document.getElementById("currentCityName");
var cityName = "Austin";
//var cityName = document.getElementById("searchCity").value;
var wxCardPlaceholder = document.getElementById("wxCardPlaceholder")
var currentCityPlaceholder = document.getElementById("currentCityPlaceholder")
var fiveDayForecast = document.getElementById("fiveDayWxContainer");


//var today = day.js()
//var fiveDayOftheWeek = day.js().format("ddd")
var APIKey = "7a606e84af306b85d675cea3b62d63d1"
var weatherURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName +"&units=imperial&appid="+ APIKey;



function fetchWeather () {
  fetch(weatherURL)
  .then(function (response) {
    return response.json();
  })
  .then(function(data){
    console.log(data)

      var currentCityName = document.createElement("h1");
      //var currentIcon = document.createElement("img");
      var currentTemp = document.createElement("p");
      var currentWind = document.createElement("p");
      var currentHumidity = document.createElement("p");


      currentCityName.textContent = cityName;
      //currentIcon.setAttribute("src", wxIconURL)
      currentTemp.textContent = "Temp: " + data.list[0].main.temp + "°F"
      currentWind.textContent = "Wind: " + data.list[0].wind.speed + " MPH";
      currentHumidity.textContent = "Humidity: " + data.list[0].main.humidity + "%";

      currentCityWx.append(currentCityName);
      //currentCityWx.append(currentIcon);
      currentCityWx.append(currentTemp);
      currentCityWx.append(currentWind);
      currentCityWx.append(currentHumidity);
      currentCityPlaceholder.setAttribute("style", "display: none")

      console.log(data.list[0].main.temp)
      console.log(data.list[0].wind.speed)
      console.log(data.list[0].main.humidity)
      console.log(data.list[0].weather[0].icon)

    for(var i = 1; i <6; i++){

      var iconCode = data.list[i].weather[0].icon
      var wxIconURL = "https://openweathermap.org/img/w/" + iconCode + ".png"

      var fiveDayWxCard = document.createElement("div");
      var fiveDayWxHeader = document.createElement("h3");
      var fiveDayWxIcon = document.createElement("img");
      var fiveDayCardBody = document.createElement("div");
      var fiveDayTemp = document.createElement("p");
      var fiveDayWind = document.createElement("p");
      var fiveDayHumidity= document.createElement("p");

      fiveDayWxHeader.textContent = "Day " + i;
      fiveDayTemp.textContent = "Temp: " + data.list[i].main.temp + "°F";
      fiveDayWind.textContent = "Wind: " + data.list[i].wind.speed + " MPH";
      fiveDayHumidity.textContent = "Humidity: " + data.list[i].main.humidity + "%";

      fiveDayForecast.append(fiveDayWxCard);
      fiveDayWxCard.append(fiveDayWxHeader);
      fiveDayWxCard.append(fiveDayCardBody);
      fiveDayCardBody.append(fiveDayWxIcon);
      fiveDayCardBody.append(fiveDayTemp);
      fiveDayCardBody.append(fiveDayWind);
      fiveDayCardBody.append(fiveDayHumidity);

      fiveDayWxIcon.setAttribute("src", wxIconURL)      
      fiveDayWxCard.setAttribute("class", "card bg-light m-3")
      fiveDayWxCard.setAttribute("style", "width: 18rem")
      fiveDayWxHeader.setAttribute("class", "card-header")
      fiveDayCardBody.setAttribute("class", "card-body")
      wxCardPlaceholder.setAttribute("style", "display: none")

      console.log(data.list[i].main.temp)
      console.log(data.list[i].wind.speed)
      console.log(data.list[i].main.humidity)
      console.log(data.list[i].weather[0].icon)
    }
  })
}

//create a function for search and use the fetchWeather
//function searchCity(){
  //cityNameBtn.textContent = cityName
  //cityNameContainer.append(cityNameBtn);
  //cityNameBtn.setAttribute("class", "btn btn-info text-white my-1")
  //fetchWeather()
//}


searchCityBtn.addEventListener("click", fetchWeather);
//cityNameBtn.addEventListener("click", searchCity);


//https://api.openweathermap.org/data/2.5/forecast?q=houston&limit=5&units=imperial&appid=7a606e84af306b85d675cea3b62d63d1