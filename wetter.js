// Automatische Standorterkennung
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            fetchWeatherByCoords(lat, lon);
        }, () => alert("Geolocation verweigert. Bitte Stadt manuell eingeben."));
    } else {
        alert("Geolocation wird nicht unterstützt.");
    }
}

// Funktion zur Wetterabfrage mit Koordinaten
async function fetchWeatherByCoords(lat, lon) {
    try {
        const response = await fetch(`https://wonderful-plant-04e241a03.4.azurestaticapps.net/api/wetter-api?lat=${lat}&lon=${lon}`);
        const data = await response.json();

        document.getElementById("location").textContent = `Standort: ${lat}, ${lon}`;
        document.getElementById("temperature").textContent = data.data_1h.temperature[0];
        document.getElementById("wind").textContent = data.data_1h.windspeed[0];
        document.getElementById("humidity").textContent = data.data_1h.relativehumidity[0];
        document.getElementById("rain").textContent = data.data_1h.precipitation_probability[0];
        document.getElementById("uv").textContent = data.data_1h.uvindex[0];

        // Wettericon basierend auf pictocode setzen
        const pictocode = data.data_1h.pictocode[0];
        let weatherIcon = "🌤"; 
        
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

// Falls Nutzer eine Stadt oder Koordinaten eingibt
async function fetchWeather() {
    let input = document.getElementById("city-input").value.trim();

    let lat, lon;
    
    if (input.includes(",")) {
        let parts = input.split(",");
        lat = parseFloat(parts[0]);
        lon = parseFloat(parts[1]);
    } else {
        const locationResponse = await fetch(`https://nominatim.openstreetmap.org/search?q=${input}&format=json`);
        const locationData = await locationResponse.json();
        
        if (locationData.length === 0) {
            alert("Stadt nicht gefunden! Versuche es mit Koordinaten.");
            return;
        }

        lat = locationData[0].lat;
        lon = locationData[0].lon;
    }

    fetchWeatherByCoords(lat, lon);
}

// Lade automatisch das Wetter für den Standort des Nutzers, wenn die Seite geöffnet wird
window.onload = getLocation;
