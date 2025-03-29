import weatherModel from "./model/weather.model";
import weatherView from "./view/weather.view";

// Controls fetching and displaying data
const weatherController = (() => {
    const searchInput = document.querySelector('input#search-input');
    const searchButton = document.querySelector('button#submit-button');
    
    const fetchWeather = async (cityName = 'Maasin') => {
        const weatherData = await weatherModel.loadData(cityName);

        weatherView.renderWeather(weatherData);
    };

    const handleSearchWeather = () => {
        searchButton.addEventListener('click', () => {
            const cityName = searchInput.value.trim() || 'Maasin';
            
            setTimeout(() => {
                fetchWeather(cityName);
            }, 3000);
        });
    }

    const init = () => {
        handleSearchWeather();
        fetchWeather();
    };

    return { init };
})();

export default weatherController;