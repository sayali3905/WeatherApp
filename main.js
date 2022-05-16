const api = {
  key: "3045dd712ffe6e702e3245525ac7fa38",
  base: "https://api.openweathermap.org/data/2.5/"
}
      
const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', performEvent);
      
function performEvent(evt) {
  if (evt.keyCode == 13) {
    getResults(searchbox.value);
  }
}
      
function getResults(value) {
fetch(`${api.base}weather?q=${value}&units=metric&APPID=${api.key}`)
  .then(weather => {
    return weather.json();
  }).then(display);
}
      
function display(weather) {
let city = document.querySelector('.location .city');
city.innerText = `${weather.name}, ${weather.sys.country}`;
      
let today = new Date();
let date = document.querySelector('.location .date');
date.innerText = dateBuilder(today);
      
let temp = document.querySelector('.temperature .temp');
temp.innerHTML = `${Math.round(weather.main.temp)}<span>°C</span>`;
      
let weather_element = document.querySelector('.temperature .weather');
weather_element.innerText = weather.weather[0].main;
}
      
function dateBuilder (today) {
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      
  let day = days[today.getDay()];
  let date = today.getDate();
  let month = months[today.getMonth()];
  let year = today.getFullYear();
      
  return `${day} ${date} ${month} ${year}`;
}