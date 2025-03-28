import './styles.css';
import { fetchData } from './api';
import dateFormat from 'dateformat';

const getImage = (icon) => require(`./asset/icons/${icon}.png`);
const convertToCelsius = (fahrenheit) => ((fahrenheit - 32) * 5 / 9).toFixed(0);;
let json = await fetchData();

const currentDay = 0;

const input = document.querySelector('#search-input');
const button = document.querySelector('#submit-button');

button.addEventListener('click', async () => {
    json = await fetchData(input.value.trim() || undefined);

    const weatherConditon = {
        'currentDate' : dateFormat(new Date(), 'dddd, mmmm dd'),
        'address' : json.resolvedAddress,
        'icon' : json.days[currentDay].icon,
        'description' : json.days[currentDay].description,
        'currentTemperature' : json.days[currentDay].temp,
        'currentWind' : json.days[currentDay].windspeed,
        'currentHumid' : json.days[currentDay].humidity,
        'nextSixDays' : json.days.slice(1, 7)
    }

    let dateHeading = document.querySelector('h2.date-heading');
    let addressHeading = document.querySelector('h2.address-heading');
    let weatherIcon = document.querySelector('img#weather-icon');
    let weatherDescription = document.querySelector('p.description');
    let weatherTemp = document.querySelector('p.temperature');
    let weatherWindSpeed = document.querySelector('p.windspeed');
    let weatherHumidity = document.querySelector('p.humid');
    let futureDays = document.querySelectorAll('div.card.day');


    dateHeading.innerHTML = weatherConditon.currentDate;
    addressHeading.innerHTML = weatherConditon.address;
    weatherIcon.src = getImage(weatherConditon.icon);
    weatherDescription.innerHTML = weatherConditon.description;
    weatherTemp.innerHTML = convertToCelsius(weatherConditon.currentTemperature);
    weatherWindSpeed.innerHTML = weatherConditon.currentWind;
    weatherHumidity.innerHTML = weatherConditon.currentHumid;

    for(let i = 0; i < futureDays.length; i++) {
        const day = weatherConditon.nextSixDays[i];
        const iconDay = futureDays[i].children[0];
        const textDay = futureDays[i].children[1];    
        const tempDay = futureDays[i].children[2];    

        iconDay.src = getImage(day.icon);
        textDay.innerHTML = dateFormat(day.datetime, 'dddd');
        tempDay.innerHTML = convertToCelsius(day.temp);
    }
});









