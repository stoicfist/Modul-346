async function getWeather() {
    try {
        const response = await fetch("https://wonderful-plant-04e241a03.4.azurestaticapps.net/api/wetter-api?lat=47.3769&lon=8.5417");
        if (!response.ok) {
            throw new Error(`HTTP-Fehler! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Wetterdaten erhalten:", data);

        document.getElementById("weather-output").innerHTML = `
            <h2>Wetter für ${data.metadata.name || "deine Stadt"}</h2>
            <p><strong>Temperatur:</strong> ${data.data_1h.temperature[0]}°C</p>
            <p><strong>Windgeschwindigkeit:</strong> ${data.data_1h.windspeed[0]} m/s</p>
            <p><strong>Regenwahrscheinlichkeit:</strong> ${data.data_1h.precipitation_probability[0]}%</p>
        `;
    } catch (error) {
        console.error("Fehler beim Abrufen der Wetterdaten:", error);
    }
}

document.addEventListener("DOMContentLoaded", getWeather);
