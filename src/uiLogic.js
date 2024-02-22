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
  return { updateWeatherBox };
})();

export { UI };
