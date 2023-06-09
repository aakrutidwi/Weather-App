const API_KEY = `9ec4c440feff1e0ba3a71b47254d4548`;
const form = document.querySelector("form");
const weather = document.querySelector("#weather");
const search = document.querySelector("#search");
const img = document.querySelector(".material-icons");


const getweather = async (city) => {
  console.log(city);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return showWeather(data);
};
let city2;


const showWeather = (data) => {
  weather.innerHTML = `${data.main.temp},${data.weather[0].description}`
  setImage(data.weather[0].description)
};

function setImage(description){
    console.log(img)
   
    switch(description){
        case 'few clouds' : img.innerHTML = 'thunderstorm'; 
        case 'light Snow' : img.innerHTML = 'snowing'; 

        case 'clear sky' : img.innerHTML = 'clear_day'; 
        case 'mist' : img.innerHTML = 'mist'; 
        case 'haze' : img.innerHTML = 'dehaze'; 

 



    
    }
}

form.addEventListener("submit", function (event) {
  getweather(search.value);
 city2 =search.value;

  event.preventDefault();
});
