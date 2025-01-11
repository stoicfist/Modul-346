document.addEventListener("DOMContentLoaded", async function () {
    const apiKey = "METEOBLUE_API_KEY";
    const lat = "47.3769";  // Koordinaten für Zürich
    const lon = "8.5417";
    const url = `https://my.meteoblue.com/packages/basic-1h?apikey=${apiKey}&lat=${lat}&lon=${lon}&format=json&forecast_days=1`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`API error: ${response.status}`);

        const data = await response.json();
        const weatherData = data.data_weather;  // Überprüfe JSON-Struktur der API!

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
