import { format } from "date-fns";

const UI = (() => {
  const displayLogic = {
    locationText: document.querySelector(".location"),
    tempText: document.querySelector(".temp"),
    weatherText: document.querySelector(".weather-text"),
    conditionIcon: document.getElementById("condition-image"),
    feelslikeText: document.getElementById("feels-like"),
    precipText: document.getElementById("precip"),
    visibilityText: document.getElementById("visibility"),
    humidityText: document.getElementById("humidity"),
    hourBoxes: document.querySelectorAll(".i-hour"),
    dailyBoxes: document.querySelectorAll(".i-daily"),
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
    displayLogic.dailyBoxes.forEach((day) => {
      day.childNodes.textContent = "";
    });
  };

  const setConditionIcon = function (conditionIcon) {
    displayLogic.conditionIcon.src = conditionIcon;
  };

  const updateWeatherBox = function (
    location,
    temp,
    condition,
    conditionIcon,
    feelsLike,
    precip,
    windSpeed,
    humidity,
  ) {
    clearWeatherContent();

    displayLogic.locationText.textContent = location;
    displayLogic.tempText.textContent = temp;
    displayLogic.weatherText.textContent = condition;
    displayLogic.feelslikeText.textContent = feelsLike;
    displayLogic.precipText.textContent = precip;
    displayLogic.visibilityText.textContent = windSpeed;
    displayLogic.humidityText.textContent = humidity;

    setConditionIcon(conditionIcon);
  };

  const getCurrentHour = () => {
    let now = new Date();
    let currentHour = now.getHours();

    return currentHour;
  };

  const updateHourBoxes = function (hourData) {
    let i = getCurrentHour();

    displayLogic.hourBoxes.forEach((hour) => {
      let time = hour.querySelector(".time");
      let temp = hour.querySelector(".hour-temp");
      let hourIcon = hour.querySelector("#hour-icon");

      if (i === getCurrentHour()) {
        time.textContent = 'Now'; 
      } else {
        let dateTimeString = hourData[i].time; // Get the full date-time string
        let timeString = dateTimeString.split(" ")[1]; // Split by space and take the second element
        time.textContent = timeString;
      }

      let roundedTemp = Math.round(hourData[i].temp_c);
      temp.textContent = `${roundedTemp}º`;

      hourIcon.src = hourData[i].condition.icon;

      i++;
    });
  };

  const updateDailyBoxes = function (dailyData) {
    let i = 0;

    displayLogic.dailyBoxes.forEach((day) => {
      let dayText = day.querySelector(".day");
      let icon = day.querySelector("#daily-icon");
      let lowTemp = day.querySelector(".daily-low-temp");
      let highTemp = day.querySelector(".daily-high-temp");

      if (i === 0) {
        dayText.textContent = "Today";
      } else {
        let formatDate = format(
          new Date(dailyData[i].date),
          "EEE",
        );
        dayText.textContent = formatDate;
      }

      icon.src = dailyData[i].day.condition.icon;
      let roundedMinTemp = Math.round(
        dailyData[i].day.mintemp_c,
      );
      lowTemp.textContent = `${roundedMinTemp}º`;
      let roundedMaxTemp = Math.round(
        dailyData[i].day.maxtemp_c,
      );
      highTemp.textContent = `${roundedMaxTemp}º`;

      i++;
    });
  };

  return {
    updateWeatherBox,
    updateHourBoxes,
    getCurrentHour,
    updateDailyBoxes,
  };
})();

export { UI };
