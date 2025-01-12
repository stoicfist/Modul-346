import fetch from "node-fetch";

export default async function (context, req) {
    const apiKey = process.env["METEOBLUE_API_KEY"];
    console.log("🔑 API-Key:", apiKey);

    const lat = req.query.lat || "47.3769";  
    const lon = req.query.lon || "8.5417";

    const url = `https://my.meteoblue.com/packages/basic-1h?apikey=${apiKey}&lat=${lat}&lon=${lon}&format=json&forecast_days=1`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        context.res = {
            status: 200,
            body: data
        };
    } catch (error) {
        context.res = {
            status: 500,
            body: { error: "Fehler beim Abrufen der Wetterdaten." }
        };
    }
};
