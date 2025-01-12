document.addEventListener("DOMContentLoaded", async function () {
    const url = "/api/wetter-api?lat=47.3769&lon=8.5417";  // Hole Daten von Azure Function

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`API error: ${response.status}`);

        const data = await response.json();
        const weatherData = data.data_weather;

        document.getElementById("weather-data").innerHTML = `
            <p>🌡 Temperatur: ${weatherData.temperature[0]}°C</p>
            <p>☁️ Bewölkung: ${weatherData.cloud_cover[0]}%</p>
            <p>💨 Wind: ${weatherData.wind_speed[0]} km/h</p>
        `;
    } catch (error) {
        document.getElementById("weather-data").innerHTML = `<p>Fehler beim Laden der Wetterdaten.</p>`;
        console.error("Fehler:", error);
    }
});
