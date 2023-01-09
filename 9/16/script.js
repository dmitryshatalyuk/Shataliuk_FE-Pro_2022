const form = document.querySelector(".getCity");
const weatherBox = document.querySelector(".weatherInfo");

form.onsubmit = function (e) {
  e.preventDefault();

  const inputValue = Object.fromEntries(new FormData(e.target).entries());

  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${inputValue.city.toUpperCase()}&units=metric&APPID=5d066958a60d315387d9492393935c19`
  )
    .then((request) => {
      return request.text();
    })
    .then((data) => {
      const weatherData = JSON.parse(data);

      console.log(weatherData);

      weatherBox.style.display = "inline-block";

      weatherBox.innerHTML = `
      <div class="title_box">
        <p class="title">${weatherData.name}, ${weatherData.sys.country}</p>
        <h2 class="subtitle">${Math.ceil(weatherData.main.temp)}°</h2>
        <p class="sub_subtitle">${weatherData.weather[0].main}</p>
      </div>
      <div class="weather_items">
        <div class="item_box">
            <p class="item_title">Feels like</p>
            <p class="info">${Math.ceil(weatherData.main.feels_like)}°</p>
        </div>
        <div class="item_box">
            <p class="item_title">Pressure</p>
            <p class="info">${Math.ceil(weatherData.main.pressure)}<span>hPa</span></p>
        </div>
        <div class="item_box">
            <p class="item_title">Description</p>
            <p class="info capitalize">${weatherData.weather[0].description}</p>
        </div>
        <div class="item_box">
            <p class="item_title">Humidity</p>
            <p class="info">${weatherData.main.humidity}%</p>
        </div>
        <div class="item_box">
            <p class="item_title">Wind speed</p>
            <p class="info">${weatherData.wind.speed}km/h</p>
        </div>
        <div class="item_box">
            <p class="item_title wind">Wind direction</p>
            <p class="info"><span class="arrow"><img src="Frame 27.svg" style="transform: rotate(${weatherData.wind.deg}deg)"></span>${weatherData.wind.deg}°</p>
        </div>
      </div>`;
      
    })
    .catch((err) => {weatherBox.innerHTML = `${inputValue.city} not found`});
};
