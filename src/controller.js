import weatherModel from "./model/weather.model";
import weatherView from "./view/weather.view";
import alertView from "./view/alert.view";

const alertController = (() => {
    const showAlert = (type) => {
        let message;

        if(type === 'success') {
            message = 'Weather data loaded successfully!';
        } else if(type == 'error') {
            message = 'Failed to load weather data. Try again.';
        }

        alertView.popAlert(type, message);

        document.querySelector('.alert-close.button').addEventListener('click', closeAlert);

        setTimeout(() => {
            closeAlert();
        },3000);
    };
    
    const closeAlert = () => {
        const alert = document.querySelector('div.alert');

        alert.classList.remove('show');
    };


    return { showAlert }
})();

// Controls fetching and displaying data
const weatherController = (() => {
    const searchInput = document.querySelector('input#search-input');
    const searchButton = document.querySelector('button#submit-button');
    
    const fetchWeather = async (cityName) => {
        const weatherData = await weatherModel.loadData(cityName);

        if(!weatherData) {
            alertController.showAlert('error');
            return;
        }

        alertController.showAlert('success');
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
            const cityName = searchInput.value.trim() || undefined;

            showLoading();

            setTimeout(() => {
                fetchWeather(cityName);
                hideLoading();
            }, 2000);
        });
    }

    const init = () => {
        handleSearchWeather();

        fetchWeather();
    };

    return { init };
})();

export default weatherController;