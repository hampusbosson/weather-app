import { format } from "date-fns"; 

const UI = (() => {
  const displayLogic = {
    locationText: document.querySelector(".location"),
    tempText: document.querySelector(".temp"),
    weatherText: document.querySelector(".weather-text"),
    conditionIcon: document.getElementById('condition-image'),
    feelslikeText: document.getElementById("feels-like"),
    precipText: document.getElementById("precip"),
    visibilityText: document.getElementById("visibility"),
    humidityText: document.getElementById("humidity"),
    hourBoxes: document.querySelectorAll(".i-hour")
  };

  const clearWeatherContent = () => {
    displayLogic.locationText.textContent = "";
    displayLogic.tempText.textContent = "";
    displayLogic.weatherText.textContent = "";
    displayLogic.feelslikeText.textContent = "";
    displayLogic.precipText.textContent = "";
    displayLogic.visibilityText.textContent = "";
    displayLogic.humidityText.textContent = "";
    displayLogic.conditionIcon.src = ""; 
    displayLogic.hourBoxes.forEach((hour) => {
      hour.childNodes.textContent = ""; 
    });
  };

  const setConditionIcon = function(conditionIcon) {
    displayLogic.conditionIcon.src = conditionIcon;
  }

  const updateWeatherBox = function (
    location,
    temp,
    condition,
    conditionIcon,
    feelsLike,
    precip,
    visibility,
    humidity,
  ) {
    clearWeatherContent();

    displayLogic.locationText.textContent = location;
    displayLogic.tempText.textContent = temp;
    displayLogic.weatherText.textContent = condition;
    displayLogic.feelslikeText.textContent = feelsLike;
    displayLogic.precipText.textContent = precip;
    displayLogic.visibilityText.textContent = visibility;
    displayLogic.humidityText.textContent = humidity;

    setConditionIcon(conditionIcon);

  };

  const getCurrentHour = () => {
    let now = new Date(); 
    let currentHour = now.getHours(); 
    
    return currentHour; 
  }

  const updateHourBoxes = function(hourData) {
    let i = getCurrentHour(); 

    displayLogic.hourBoxes.forEach((hour) => {
      let time = hour.querySelector('.time'); 
      let temp = hour.querySelector('.hour-temp'); 
      let hourIcon = hour.querySelector('#hour-icon');

      let dateTimeString = hourData[i].time; // Get the full date-time string
      let timeString = dateTimeString.split(' ')[1]; // Split by space and take the second element

      let roundedTemp = Math.round(hourData[i].temp_c);

      time.textContent = timeString;
      temp.textContent = `${roundedTemp}º`;
      hourIcon.src = hourData[i].condition.icon;

      i++; 
    })
  }


  return { updateWeatherBox, updateHourBoxes, getCurrentHour };
})();

export { UI };
