const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById("lastmodified").textContent = lastModified;

const temperature = 12; // in °C
const windSpeed = 10; // in km/h

function calculateWindChill(temp, windSpeed) {
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16);
}

function displayWindChill(temp, windSpeed) {
    let windChill = "N/A";
    if (temp <= 10 && windSpeed > 4.8) {
        windChill = calculateWindChill(temp, windSpeed).toFixed(1) + " °C";
    }
    document.getElementById("wind-chill").textContent = windChill;
}

displayWindChill(temperature, windSpeed);