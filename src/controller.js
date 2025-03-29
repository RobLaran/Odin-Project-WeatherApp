import weatherModel from "./model/weather.model";
import weatherView from "./view/weather.view";

// Controls fetching and displaying data
const weatherController = (() => {
    const searchInput = document.querySelector('input#search-input');
    const searchButton = document.querySelector('button#submit-button');
    
    const fetchWeather = async (cityName) => {
        const weatherData = await weatherModel.loadData(cityName);

        weatherView.renderWeather(weatherData);
    };

    const showLoading = () => {
        document.querySelector('#modal-loader').showModal();
        document.querySelector('.loader').style = 'display: block;';
    };

    const hideLoading = () => {
        document.querySelector('#modal-loader').close();
        document.querySelector('.loader').style = 'display: none;';
    };

    const handleSearchWeather = () => {
        searchButton.addEventListener('click', () => {
            const cityName = searchInput.value.trim() || 'Maasin';

            showLoading();

            setTimeout(() => {
                fetchWeather(cityName);
                hideLoading();
            }, 4000);
        });
    }

    const init = () => {
        handleSearchWeather();

        fetchWeather();
    };

    return { init };
})();

export default weatherController;