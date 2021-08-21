window.onload = function() {
    let inputField = document.querySelector("#inputField")
    let date = document.querySelector('#date')
    let city = document.querySelector("#city")
    let weather = document.querySelector("#weather")
    let temperature = document.querySelector('#temperature')
    let container = document.querySelector('#container')
    let weatherData
    let img = document.querySelector("#img")
    let form = document.querySelector("#form")
    let api = {
        key: '90db5890a25b3a7867e106a22138c7a7',
        base: 'https://api.openweathermap.org/data/2.5/'
      }
    
    let lat
    let long

    navigator.geolocation.getCurrentPosition((position) => {
        console.log(position)
        lat = position.coords.latitude
        long = position.coords.longitude
        fetch(`${api.base}weather?lat=${lat}&lon=${long}&units=imperial&appid=${api.key}`)
            .then(res => res.json())
            .then(data => {
                weatherData = data
                let icon = weatherData.weather[0].icon
                if (Math.round(weatherData.main.temp) > 80) {
                    container.classList.remove("cold")
                } else {
                    if (!container.classList.contains("cold")) {
                        container.classList.add("cold")
                    }
                }
                city.innerHTML = `${weatherData.name}, ${weatherData.sys.country}`
                date.innerHTML = `${new Date().toLocaleString()}`
                console.log(icon)
                img.src = `http://openweathermap.org/img/wn/${icon}@2x.png`
                weather.innerHTML = `${weatherData.weather[0].main}`
                temperature.innerHTML = `${Math.round(weatherData.main.temp)}°F`
                inputField.value = ''
                inputField.focus()
            })
    })

    form.addEventListener("submit", function(e) {
        e.preventDefault()
        fetch(`${api.base}weather?q=${inputField.value}&units=imperial&appid=${api.key}`)
            .then(res => res.json())
            .then(data => {
                weatherData = data
                let icon = weatherData.weather[0].icon
                if (Math.round(weatherData.main.temp) > 80) {
                    container.classList.remove("cold")
                } else {
                    if (!container.classList.contains("cold")) {
                        container.classList.add("cold")
                    }
                }
                city.innerHTML = `${weatherData.name}, ${weatherData.sys.country}`
                date.innerHTML = `${new Date().toLocaleString()}`
                weather.innerHTML = `${weatherData.weather[0].main}`
                temperature.innerHTML = `${Math.round(weatherData.main.temp)}°F`
                img.src = `http://openweathermap.org/img/wn/${icon}@2x.png`
                inputField.value = ''
                inputField.focus()
            })
        
    })
}