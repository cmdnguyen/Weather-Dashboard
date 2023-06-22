# Weather-Dashboard

## Description

This is a simple Weather Dashboard to display the forecast for today and the next five days. 
You can search for a city or click on the city you have previously searched to display the forecast for the city. You can see the temperature, wind speed, humidity and the weather icon of the day.
You'll only see the city that you are currently looking at and you can switch to another city with another search.
I wanted to use the data from Open Weather Maps to create a weather dashboard for people to look at the weather in an easy fashion.
This was new experience using a Server Side API and fetching the data was an interesting challenge. However, it was satisfying to get to work.

Here's the link to the website: https://cmdnguyen.github.io/Weather-Dashboard/

## Installation

I used Bootstrap to create the CSS elements on the page.
I also used the Open Weather Maps API to grab forecast data.

## Usage

This is what the website looks like when you open it. It has some placeholders to show people what to expect when they search. In the screenshot, it had some buttons from my previous search history in my local storage. You will see that container blank if you do not have anything in the local storage.

![Starting the page](/Assets/Images/Screenshot%202023-06-22%20145456.png)

Clicking a city from a previous seach history will display the weather for the city and remove the placeholders. You will see the current city and the weather forecast for today in the main card. The five day forecast will display the weather for the next five days.

![Pulling up the forecast](/Assets/Images/Screenshot%202023-06-22%20145615.png)

When you are looking for a new city, it will create a new button as it becomes a part of your search history.

![Searching New City](/Assets/Images/Screenshot%202023-06-22%20145646.png)

## Credits

Bootcamp Tutor, Alexis Gonzalez
Bootcamp TA, Kevin Long

## License

Please refer to the LICENSE in the repo.