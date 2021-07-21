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

/* Wind Chill Temperature.*/
window.addEventListener('load', () => {
    const calWindChill = (temperature, speed) => {
        return (temperature >= 50 && speed > 3) ?
            Math.round(
                35.74 + (0.6215 * temperature) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * (temperature * Math.pow(speed, 0.16))), ) :
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