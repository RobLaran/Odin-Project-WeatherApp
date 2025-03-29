import { fetchData } from '../api';
import dateFormat from 'dateformat';

// Weather condition model
const weatherModel = (() => {
	let data = null;
	const currentDay = 0;

	const formatData = () => {
		if(!data) return null;

		return {
			'currentDate' : dateFormat(new Date(), 'dddd, mmmm dd'),
			'address' : data.resolvedAddress,
			'icon' : data.days[currentDay].icon,
			'description' : data.days[currentDay].description,
			'currentTemperature' : data.days[currentDay].temp,
			'currentWind' : data.days[currentDay].windspeed,
			'currentHumid' : data.days[currentDay].humidity,
			'nextSixDays' : data.days.slice(1, 7)
		};
	};

	const loadData = async (city='Maasin') => {
		data = await fetchData(city);

		return formatData();
	};

	

	return { loadData };
})();

export default weatherModel;