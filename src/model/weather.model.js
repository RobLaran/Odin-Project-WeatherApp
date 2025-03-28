import dateFormat from 'dateformat';

const currentDay = 0;

// ? Create weather condition model
export const weather = {
        'currentDate' : dateFormat(new Date(), 'dddd, mmmm dd'),
        'address' : json.resolvedAddress,
        'icon' : json.days[currentDay].icon,
        'description' : json.days[currentDay].description,
        'currentTemperature' : json.days[currentDay].temp,
        'currentWind' : json.days[currentDay].windspeed,
        'currentHumid' : json.days[currentDay].humidity,
        'nextSixDays' : json.days.slice(1, 7)
}