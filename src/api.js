const API_KEY = process.env.API_KEY

export const fetchData = async function (city) {
    const API_URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/next7days?unitGroup=us&include=days&key=${API_KEY}&contentType=json`

    try {
        const response = await fetch(API_URL, {mode: 'cors'});

        if(response.status == 400) {
            throw new Error('Invalid city name.');
        }

        return await response.json();
    } catch(error) {
        alert(error);

        return null;
    }
}