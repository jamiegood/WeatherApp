Ext.define('WeatherApp.store.Forecast', {
    extend: 'Ext.data.Store',

    config: {
        model: 'WeatherApp.model.Forecast',
        //autoLoad: true,
        proxy: {
            type: 'jsonp',
            url : WeatherApp.util.Config.getWeatherForecastAPI(),
            reader: {
                type: 'json'
            }
        }
    }
});

