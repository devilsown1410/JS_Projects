// Replace with your OpenWeatherMap API key
const API_KEY= '2cc2f2791eac6816a11a04095bfb7008';
async function weather(city) {
  const api_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  try {
    const response = await fetch(api_url);
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    const data = await response.json();
    getWeather(data);
  } catch (error) {
    console.error("Error fetching weather:", error);
  }
}

function getWeather(data) {
  const cityElement = document.querySelector(".city");
  const dateElement = document.querySelector(".date");
  const tempElement = document.querySelector(".temp");
  const weatherElement = document.querySelector(".weather");
  const hiLowElement = document.querySelector(".hi-low");
  const wind=document.querySelector(".wind");

  cityElement.innerText = `${data.name}, ${data.sys.country}`;
  const formattedDate = new Date(data.dt * 1000).toLocaleDateString("en-US");
  dateElement.innerText = formattedDate;
  tempElement.innerText = `${data.main.temp} °C`;
  weatherElement.innerText = `${data.weather[0].description}`;
  hiLowElement.innerText = `${data.main.temp_min}°c / ${data.main.temp_max}°c`;
  wind.innerText=`Wind Speed : ${data.wind.speed} m/s`;

  document.getElementById('search').value = '';
}

document.getElementById("getWeather").addEventListener('click', function(e){
  e.preventDefault();
  const city = document.getElementById('search').value;
  if(city){
    weather(city);
  }else{
    alert("Enter Valid City Name")
  }
})
