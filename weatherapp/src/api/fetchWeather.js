
async function fetchWeather(cityname) {
    const apiKey = import.meta.env.VITE_WEATHER_API;
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apiKey}&units=metric`)
    const result = await response.json()
    
    return result
}

export default fetchWeather;