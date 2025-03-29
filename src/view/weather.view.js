import dateFormat from "dateformat";
import { getImage, convertToCelsius } from "../utils/helpers";

// Weather view to display weather condition
const weatherView = (() => {
    const elements = {
         dateHeading : document.querySelector('h2.date-heading'),
         addressHeading : document.querySelector('h2.address-heading'),
         weatherIcon : document.querySelector('img#weather-icon'),
         weatherDescription : document.querySelector('p.description'),
         weatherTemp : document.querySelector('p.temperature'),
         weatherWindSpeed : document.querySelector('p.windspeed'),
         weatherHumidity : document.querySelector('p.humid'),
         futureDays : document.querySelectorAll('div.card.day')
    };

    const renderWeather = (weatherData) => {
        if(!weatherData) return;

        elements.dateHeading.innerHTML = weatherData.currentDate;
        elements.addressHeading.innerHTML = weatherData.address;
        elements.weatherIcon.src = getImage(weatherData.icon);
        elements.weatherDescription.innerHTML = weatherData.description;
        elements.weatherTemp.innerHTML = convertToCelsius(weatherData.currentTemperature);
        elements.weatherWindSpeed.innerHTML = weatherData.currentWind;
        elements.weatherHumidity.innerHTML = weatherData.currentHumid;
        
        for(let i = 0; i < elements.futureDays.length; i++) {
            const day = weatherData.nextSixDays[i];
            const iconDay = elements.futureDays[i].children[0];
            const textDay = elements.futureDays[i].children[1];    
            const tempDay = elements.futureDays[i].children[2];    
    
            iconDay.src = getImage(day.icon);
            textDay.innerHTML = dateFormat(day.datetime, 'dddd');
            tempDay.innerHTML = convertToCelsius(day.temp);
        }
    };
    
    return { renderWeather };
})();

export default weatherView;