Ext.define('WeatherApp.store.WeatherToday', {
    extend: 'Ext.data.Store',

    config: {
        model: 'WeatherApp.model.WeatherToday',
        //autoLoad: true,
        proxy: {
            type: 'jsonp',
            url : WeatherApp.util.Config.getWeatherAPI() + WeatherApp.util.Config.getDefaultCountry(),
            //url: 'http://api.openweathermap.org/data/2.5/weather?units=metric&q=Dublin,ie',
            reader: {
                type: 'json'
            }
        }
    }
});

