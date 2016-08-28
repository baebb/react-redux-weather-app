import axios from 'axios';

const API_KEY = '1d9f50db6e9e512b82896c3090b5e0a3';
const ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?appid=' + API_KEY;

export const FETCH_WEATHER = 'FETCH_WEATHER';
export const CITY_WEATHER = 'CITY_WEATHER';

export function fetchWeather(city) {
    const url = ROOT_URL + "&q=" + city + ",us";
    const request = axios.get(url);

    console.log('request:' + request);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}

export function cityWeather(city) {
    const url = ROOT_URL + "&q=" + city + ",us";
    const request = axios.get(url);

    console.log('request:' + request);

    return {
        type: CITY_WEATHER,
        payload:request
    }
}