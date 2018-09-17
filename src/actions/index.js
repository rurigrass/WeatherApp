import axios from 'axios';

const API_KEY = "473161d12ca2dff108d5cf25f313d974";
const ROOT_URL = `https://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    console.log('Request:', request);
    


    return {
        type: FETCH_WEATHER,
        payload: request
    };
}