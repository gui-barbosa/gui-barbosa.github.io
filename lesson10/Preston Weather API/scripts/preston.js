/* Preston Weather API*/
async function getWeatherSumm() {
    const url = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=840345b34fbe07325850273106defd71";
    const response = await fetch(url);

    if (response.status == 200) {
        return response.json();
    } else {
        throw new Error("No weather found + " + response.status);
    }
}

async function getFiveDay() {
    const url = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=840345b34fbe07325850273106defd71";
    const response = await fetch(url);

    if (response.status == 200) {
        return response.json();
    } else {
        throw new Error("No weather found + " + response.status);
    }
}

function weather() {
    getWeatherSumm()
        .then(function (weather) {
            console.log(weather);
            let temp = document.getElementById('temp');
            let condition = document.getElementById('condition');
            let highTemp = document.getElementById('high-temp');
            let lowTemp = document.getElementById('low-temp');
            let humidity = document.getElementById('hum');
            let windSpeed = document.getElementById('wind-speed');

            condition.textContent = weather.weather[0].main;
            temp.textContent = Math.round(weather.main.temp);
            highTemp.textContent = Math.round(weather.main.temp_max);
            lowTemp.textContent = Math.round(weather.main.temp_min);
            humidity.textContent = weather.main.humidity;
            windSpeed.textContent = Math.round(weather.wind.speed);
        });

    getFiveDay()
    .then((weather) => {
        console.log(weather);        

        let dayNum = 1;
        for (item of weather.list) {
            if (item.dt_txt.includes("18:00:00")) {
                let day = document.querySelector('#day' + dayNum + " .temp");
                let dayDesc = document.querySelector('#day' + dayNum + " .day-desc");
                let dayImg = document.querySelector('#day' + dayNum + " img");

                day.textContent = Math.floor(item.main.temp);
                dayDesc.textContent = item.weather[0].main;
                dayImg.setAttribute('src', "http://openweathermap.org/img/wn/" + item.weather[0].icon + "@2x.png")

                dayNum++;
            }
        }        
    });
}

window.addEventListener('load', weather());