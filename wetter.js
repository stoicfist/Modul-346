async function getWeather() {
    try {
        const response = await fetch("https://wonderful-plant-04e241a03.4.azurestaticapps.net/api/wetter-api?lat=48.8566&lon=2.3522");
        const data = await response.json();

        document.getElementById("location").textContent = "Paris";

        // Wichtige Wetterdaten extrahieren
        document.getElementById("temperature").textContent = data.data_1h.temperature[0];
        document.getElementById("wind").textContent = data.data_1h.windspeed[0];
        document.getElementById("humidity").textContent = data.data_1h.relativehumidity[0];
        document.getElementById("rain").textContent = data.data_1h.precipitation_probability[0];
        document.getElementById("uv").textContent = data.data_1h.uvindex[0];

        // Wettericon basierend auf pictocode setzen
        const pictocode = data.data_1h.pictocode[0];
        let weatherIcon = "🌤"; // Standard: Sonne
        
        if (pictocode === 1) weatherIcon = "☀️";
        else if (pictocode >= 2 && pictocode <= 5) weatherIcon = "🌤";
        else if (pictocode >= 6 && pictocode <= 9) weatherIcon = "🌥";
        else if (pictocode >= 10 && pictocode <= 19) weatherIcon = "🌧";
        else if (pictocode >= 20) weatherIcon = "⛈";

        document.getElementById("weather-icon").textContent = weatherIcon;

    } catch (error) {
        console.error("Fehler beim Abrufen der Wetterdaten:", error);
    }
}

// Funktion aufrufen, wenn die Seite geladen wird
document.addEventListener("DOMContentLoaded", getWeather);
