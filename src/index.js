import "./style.css";
import { loadWeatherData, processWeatherData } from "./apiLogic";
import { UI } from "./uiLogic";

const form = document.querySelector(".weatherForm");
const searchText = document.getElementById("search");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const location = searchText.value;
  loadWeatherData(location)
    .then((data) => {
      if (data) {
        // Check if data is not undefined due to catch block execution
        const weatherData = processWeatherData(data);
        console.log(data);

        UI.updateWeatherBox(
          weatherData.location,
          weatherData.temp,
          weatherData.condition,
          weatherData.conditionIcon,
          weatherData.feelsLike,
          weatherData.precip,
          weatherData.visibility,
          weatherData.humidity,
        );

        UI.updateHourBoxes(weatherData.hourlyData); 
        UI.updateDailyBoxes(weatherData.dailyData);
      }
    })
    .catch((error) => {
      // This catch is for handling any errors that might not have been caught by the try/catch inside loadWeatherData
      console.error("Error processing weather data:", error);
    });
});
