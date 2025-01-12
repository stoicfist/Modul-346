document.addEventListener("DOMContentLoaded", async function () {
    console.log("🟢 wetter.js wird ausgeführt!");

    const url = "/api/wetter-api?lat=47.3769&lon=8.5417";
    console.log("🌍 API-Request an:", url);

    try {
        const response = await fetch(url);
        console.log("📡 API Response Status:", response.status);

        if (!response.ok) {
            throw new Error(`API Fehler: ${response.status}`);
        }

        const data = await response.json();
        console.log("📊 API Antwort:", data);

        if (!data || !data.data_weather) {
            throw new Error("⚠️ Falsches API-Format oder fehlende Daten.");
        }

        const weatherData = data.data_weather;

        document.getElementById("weather-data").innerHTML = `
            <p>🌡 Temperatur: ${weatherData.temperature ? weatherData.temperature[0] : "N/A"}°C</p>
            <p>☁️ Bewölkung: ${weatherData.cloud_cover ? weatherData.cloud_cover[0] : "N/A"}%</p>
            <p>💨 Wind: ${weatherData.wind_speed ? weatherData.wind_speed[0] : "N/A"} km/h</p>
        `;
    } catch (error) {
        document.getElementById("weather-data").innerHTML = `<p>Fehler: ${error.message}</p>`;
        console.error("❌ Fehler beim Laden der Wetterdaten:", error);
    }
});
