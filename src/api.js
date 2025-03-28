let city = "Maasin";
const API_KEY = process.env.API_KEY
const API_URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/next7days?unitGroup=us&include=days&key=${API_KEY}&contentType=json`

export const fetchData = async function () {
    const response = await fetch(API_URL, {mode: 'cors'});
    const data = await response.json();

   return data;
}