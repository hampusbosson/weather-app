const UI = (() => {
  const displayLogic = {
    locationText: document.querySelector(".location"),
    tempText: document.querySelector(".temp"),
    weatherText: document.querySelector(".weather"),
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
  };

  const updateWeatherBox = function (
    location,
    temp,
    condition,
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
  };
  return { updateWeatherBox };
})();

export { UI };
