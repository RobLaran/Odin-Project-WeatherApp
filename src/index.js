import './styles.css';
import { fetchData } from './api';
import dateFormat from 'dateformat';

const json = await fetchData();
const currentDay = 0;

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

// for(let day of weatherConditon.nextSixDays) {
//     console.log(dateFormat(new Date(day.datetime), 'dddd'), day.temp + ' deg', day.icon);
// }






