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
  const weatherData = {
    temp: `${data.current.temp_c}º`, 
    feelsLike: `${data.current.feelslike_c}º`,
    location: `${data.location.name}, ${data.location.country}`, 
    condition: data.current.condition.text,
    precip: `${data.current.precip_mm}mm`,
    visibility: `${data.current.vis_km}km`,
    humidity: `${data.current.humidity}%`
  };

  return weatherData;
}

export { loadWeatherData, processWeatherData };
