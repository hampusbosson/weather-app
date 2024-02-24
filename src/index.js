import "./style.css";
import { loadData, loadWeatherData } from "./apiLogic";

const form = document.querySelector(".weatherForm");
const searchText = document.getElementById("search");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const location = searchText.value;
  loadData(location);
});

document.addEventListener('DOMContentLoaded', () => {
  loadData('Stockholm');
});