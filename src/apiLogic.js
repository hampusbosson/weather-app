import { UI } from "./uiLogic";

async function loadWeatherData(location) {
  try {
    const apiKey = "e3121ad0474b4ae09ea105530241802";
    const url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${encodeURIComponent(location)}&days=10&aqi=no&alerts=no`;

    const response = await fetch(url, { mode: "cors" });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetching weather data failed:", error);
    alert("Something went wrong: " + error.message);
  }
}

function processWeatherData(data) {
  let currentHour = UI.getCurrentHour(); 

  let sameDayHourlyData = data.forecast.forecastday[0].hour;
  let nextDayHourlyData = data.forecast.forecastday[1].hour;
  let combinedHourlyData = [...sameDayHourlyData, ...nextDayHourlyData]; 

  const weatherData = {
    temp: `${Math.round(data.forecast.forecastday[0].hour[currentHour].temp_c)}º`, 
    feelsLike: `${data.forecast.forecastday[0].hour[currentHour].feelslike_c}º`,
    location: `${data.location.name}, ${data.location.country}`, 
    condition: data.forecast.forecastday[0].hour[currentHour].condition.text,
    conditionIcon: data.forecast.forecastday[0].hour[currentHour].condition.icon,
    precip: `${data.forecast.forecastday[0].hour[currentHour].precip_mm}mm`,
    visibility: `${data.forecast.forecastday[0].hour[currentHour].vis_km}km`,
    humidity: `${data.forecast.forecastday[0].hour[currentHour].humidity}%`,
    hourlyData: combinedHourlyData,
    dailyData: data.forecast.forecastday
  };

  return weatherData;
}


export { loadWeatherData, processWeatherData };
