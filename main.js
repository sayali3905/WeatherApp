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

setInterval(myTimer, 1000);

let temp = document.querySelector('.temperature .temp');
temp.innerHTML = `${Math.round(weather.main.temp)}<span>°C</span>`;
      
let weather_element = document.querySelector('.temperature .weather');
weather_element.innerText = backgroundChange(weather.weather[0].main);
weather_element.innerText = weather.weather[0].main;
}

function backgroundChange(weather) {
  if (weather === 'Clouds') {
  document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1534088568595-a066f410bcda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNsb3VkcyUyMHdlYXRoZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60')";
  } else if (weather === 'Rain') {
  document.body.style.backgroundImage = "url('https://media.istockphoto.com/id/503284599/photo/rainy-weather.jpg?b=1&s=170667a&w=0&k=20&c=lgzp0sKUeq04Hzd_8iAKDi21ovnbRk02zGF9CXKhngk=')";
  } else if (weather === 'Clear') {
  document.body.style.backgroundImage = "url('https://media.istockphoto.com/id/824800468/photo/sun-on-blue-sky-with-clouds.jpg?b=1&s=170667a&w=0&k=20&c=rVSwIECCenLv_NYV76uQQdhc1VwOSkPqoIjHuqNu_sw=')";
  }else if (weather === 'Haze') {
    document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1423209086112-cf2c8acd502f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGhhemUlMjB3ZWF0aGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60')";
  } else if (weather === 'Thunderstorm') {
      document.body.style.backgroundImage = "url('https://media.istockphoto.com/id/517643357/photo/thunderstorm-lightning-with-dark-cloudy-sky.jpg?b=1&s=170667a&w=0&k=20&c=MWIkaiUFGrpmwgODsLJH1qi3yEPb_PQFJwn0ewPaC6o=')";
    } else if (weather === 'Drizzle') {
      document.body.style.backgroundImage = "url('https://media.istockphoto.com/id/958956522/photo/rain-drops-on-window-glass-outside-texture-background-water-of-wonderful-heavy-rainy-day-with.jpg?b=1&s=170667a&w=0&k=20&c=LHQokwedGmNemXoZXR3FgNj1zzMGhNsXB_QbswtUGPk=')";
    } else if (weather === 'Snow') {
      document.body.style.backgroundImage = "url('https://media.istockphoto.com/id/1175651818/photo/snowy-idyllic-winter-landscape-panorama.jpg?b=1&s=170667a&w=0&k=20&c=uDCgHm2M45XwfsCVsgca1llCAvWfQJ5jYW2Or4X8vyk=')";
    } else if (weather === 'Sunny') {
      document.body.style.backgroundImage = "url('https://media.istockphoto.com/id/815712236/photo/golden-wheat-field-under-beautiful-sunset-sky.jpg?b=1&s=170667a&w=0&k=20&c=-v9QGPxV_9thTeC4wGVNSSS94OB5wsNWg9rC3xixyws=')";
    } else if (weather === 'Mist') {
      document.body.style.backgroundImage = "url('https://media.istockphoto.com/id/160321156/photo/raindrops-on-window.jpg?b=1&s=170667a&w=0&k=20&c=tifXN954DUThaZsjmCWsx-JnPg_gEPVLbxtUApKUXBc=')";
  } else {
  document.body.style.backgroundImage= "url('https://media.istockphoto.com/id/1409675424/photo/beautiful-idyllic-sunset-sky.jpg?b=1&s=170667a&w=0&k=20&c=OyjkuSqfara65_rAWRZSDC_EkcLYGGRnvJGKyON9cjE=')";
  }
}
      
function dateBuilder (today) {
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      
  let day = days[today.getDay()];
  let date = today.getDate();
  let month = months[today.getMonth()];
  let year = today.getFullYear();
      
  return `${day}, ${date} ${month} ${year}`;
}

function myTimer() {
    const d = new Date();
    let time = document.querySelector('.location .time')
    time.innerText = d.toLocaleTimeString();
}
