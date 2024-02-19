import { loadWeatherData, processWeatherData } from "./apiLogic";

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

        const resultBox = document.createElement("div");
        resultBox.classList.add("result");
        resultBox.textContent = `${weatherData.temp} Celsius, Feels like: ${weatherData.feelsLike}`;

        document.body.appendChild(resultBox);
      }
    })
    .catch((error) => {
      // This catch is for handling any errors that might not have been caught by the try/catch inside loadWeatherData
      console.error("Error processing weather data:", error);
    });
});
