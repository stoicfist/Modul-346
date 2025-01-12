async function getWeather() {
    const response = await fetch("https://wetter-api-function.azurewebsites.net/api/wetter-api");
    const data = await response.json();

    console.log("Wetterdaten:", data); // Debugging in der Konsole

    document.getElementById("weather-output").innerHTML = `
        <h2>Wetter für ${data.metadata.name || "deine Stadt"}</h2>
        <p><strong>Temperatur:</strong> ${data.data_1h.temperature[0]}°C</p>
        <p><strong>Windgeschwindigkeit:</strong> ${data.data_1h.windspeed[0]} m/s</p>
        <p><strong>Regenwahrscheinlichkeit:</strong> ${data.data_1h.precipitation_probability[0]}%</p>
    `;
}

// Funktion aufrufen, wenn die Seite geladen wird
document.addEventListener("DOMContentLoaded", getWeather);
