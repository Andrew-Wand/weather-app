const weatherContent = document.getElementById('weather-content');

const weatherContainer = document.getElementById('weather-container');

const searchBtn = document.getElementById('search-btn');
const searchInput = document.getElementById('search-bar');


// Default weather location on load
async function defaultWeather() {
    // Fetch data from open weather api
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=29d36979bd00b16fe04087ee6e2fad28&units=imperial `, {
        mode: 'cors'
    });
    const weatherData = await response.json();


    // Weather info DOM
    const weatherIcon = `http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`


    weatherContent.innerHTML = `
    
    <h1> ${weatherData.main.temp}°F</h1>
    
    <h1 class='city-name'> ${weatherData.name}, ${weatherData.sys.country}</h1>

    
    <h1>
    <img src=${weatherIcon}>
    ${weatherData.weather[0].description}
    </h1>
    
    `
    weatherContainer.classList.add('active');

}


defaultWeather();





// Get weather from API
async function getWeather(e) {
    e.preventDefault();



    let term = searchInput.value;

    // Reset DOM input
    searchInput.value = '';


    // Fetch data from open weather api
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${term}&appid=29d36979bd00b16fe04087ee6e2fad28&units=imperial `, {
        mode: 'cors'
    });
    const weatherData = await response.json();





    // Weather info DOM
    const weatherIcon = `http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`


    weatherContent.innerHTML = `
    
    <h1> ${weatherData.main.temp}°F</h1>
    
    <h1 class='city-name'> ${weatherData.name}, ${weatherData.sys.country}</h1>

    
    <h1>
    <img src=${weatherIcon}>
    ${weatherData.weather[0].description}
    </h1>
    
    `

    weatherContainer.classList.add('active');





}






// Event listeners

searchBtn.addEventListener('click', getWeather);
