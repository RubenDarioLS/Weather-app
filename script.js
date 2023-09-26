
const api_key = '8249fbc8a4d30255ed68913f457e3a24'

const urlApi = 'https://api.openweathermap.org/data/2.5/weather'

let difkelvin = 273.15



const searchButton = document.getElementById('searchButton')

searchButton.addEventListener('click', () => {

    const city = document.getElementById('cityInput').value
    if (city) {
        fetchWeatherData(city)
    }
})

function fetchWeatherData(city) {

    fetch(`${urlApi}?q=${city}&appid=${api_key}`)
        .then(data => data.json())
        .then(data => showCity(data))

}

/* umbrella icon */

let descriptionIcon;

function umbrella(description) {


    if (description === 'shower rain' || description === 'rain' || description === 'thunderstorm' || description === 'light rain') {

        descriptionIcon = document.createElement('h4')
        descriptionIcon.textContent = "☔"

        return descriptionIcon;

    }
    else {

        descriptionIcon = document.createElement('h4')
        descriptionIcon.textContent = "😎"
        return descriptionIcon;
    }

}


/* show data */

function showCity(data) {
    const divWeatherData = document.getElementById('weatherData')
    divWeatherData.innerHTML = ''

    const cityName = data.name;
    const countryName = data.sys.country
    const cityTemperature = data.main.temp;
    const description = data.weather[0].description;
    const icon = data.weather[0].icon


    const cityTitle = document.createElement('h2')
    cityTitle.textContent = `${cityName}, ${countryName}`

    const descriptionInfo = document.createElement('h3')
    descriptionInfo.textContent = description

    const tempIcon = document.createElement('img')
    tempIcon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`

    umbrella(description)

    const temperatureInfo = document.createElement('h3')
    temperatureInfo.textContent = `Temperature: ${Math.floor(cityTemperature - difkelvin)}°C`

    divWeatherData.appendChild(cityTitle)
    divWeatherData.appendChild(temperatureInfo)
    divWeatherData.appendChild(tempIcon)
    divWeatherData.appendChild(descriptionInfo)
    divWeatherData.appendChild(descriptionIcon)
}







