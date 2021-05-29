/* Hamburg botton responsive.*/
window.addEventListener('load', () => {
    const hambutton = document.querySelector('.ham');
    const mainnav = document.querySelector('#navigation');

    hambutton.addEventListener('click', () => {
        mainnav.classList.toggle('responsive')
    }, false);

    //To solve the mid resizing issue with responsive class on
    window.onresize = () => {
        if (window.innerWidth > 760) mainnav.classList.remove('responsive')
    };
})

/* Date format example : Monday, 7 June 2021.*/
window.addEventListener('load', (event) => {
    const week = document.querySelector('#name-of-day');
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    week.textContent = weekday[d.getDay()];

    const pancake_event = document.getElementById('pancake_event');
    if (d.getDay() == 5) {

        pancake_event.style.display = "block";
    } else {
        pancake_event.style.display = "none";
    }

    const dayNum = document.getElementById('day');
    dayNum.textContent = d.getDate();

    var monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const monthNum = document.getElementById('month');
    monthNum.textContent = monthName[d.getMonth()];

    const year = document.getElementById('year');
    year.textContent = d.getFullYear();

    const cry = document.querySelector("#copyright-year");
    cry.textContent = d.getFullYear();
})

/* Wind Chill Temperature.*/
window.addEventListener('load', () => {
    const calWindChill = (temperature, speed) => {
        return (temperature >= 50 && speed > 3) 
        ?
            Math.round(
                35.74 + (0.6215 * temperature) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * (temperature
                * Math.pow(speed, 0.16)))
        ,):
            "N/A";
    }

    const displayWindChill = () => {
        let temperature = Number(document.getElementById("temp").textContent || 0);
        let wind = Number(document.getElementById("wind-speed").textContent || 0);
        let result = calWindChill(temperature, wind);
        document.getElementById("wind-chill").innerHTML = result;
    }

    displayWindChill();
})