async function getWeatherSumm() {
    const url = "https://api.openweathermap.org/data/2.5/weather?zip=" + zip + ",us&units=imperial&units=imperial&appid=840345b34fbe07325850273106defd71";
    const response = await fetch(url);

    if (response.status == 200) {
        return response.json();
    } else {
        throw new Error("No weather found + " + response.status);
    }
}

window.addEventListener('load',()=>{
    const requestURL = "json/temples.json"
    fetch(requestURL)
      .then((response)=> {
          return response.json();
        })
        .then((jsonObject)=> {
            console.log(jsonObject);
            Object.entries(jsonObject).forEach(([key,temple])=>{
            //     if(temple.state == "ID"){
                    buildTempleCard(temple);
            //     }
            });
        });
});

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
    }
window.addEventListener('load', weather());

function buildTempleCard(temple){
    console.log(temple);
    let card = document.createElement("section");
    card.classList.add("temple");
    card.innerHTML = `<h2>${temple.name}</h2>
                      <img src="${temple.imageurl}" alt=${temple.name}">
                      
                      <p><b>Address: </b><br>
                      ${temple.address1}<br>
                      ${temple.city}, ${temple.state} ${temple.zip} - ${temple.country}</p>

                      <p><b>Phone Number: </b><br>
                      ${temple.phone}</p>

                      <p><b>First President: </b><br>
                      ${temple.presidents[0]} (${temple.presidents.length} Temple Presidents)</p>
                      
                      <p><b>Current President: </b><br>
                      ${temple.presidents[temple.presidents.length-1]}</p>
                      
                      <p><b>HISTORY: </b>
                      <p><b>Announced: </b>${temple.announced}<br>
                      <b>Groundbreaking: </b>${temple.groundbreaking}<br>
                      <b>Dedicated: </b>${temple.dedicated}</p>
                      
                      
                      <p><b>WEATHER CONDITION: </b>
                      <p>
                      <b>Currently: </b><span id="temp">*</span>&deg;<br>
                      <b>Condition: </b><span id="condition">*<br>
                      <b>Humidity: </b><span id="hum">*</span>%<br>
                      <b>Wind Speed: </b><span id="wind-speed">*</span> mph
                      </p>                      
                      `;
                      
    document.querySelector("#temples").appendChild(card);
}

