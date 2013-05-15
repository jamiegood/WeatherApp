Ext.define('WeatherApp.store.Weather', {
    extend: 'Ext.data.Store',

    config: {
        model: 'WeatherApp.model.Weather',

        autoLoad: true,
        // pageSize: 10,

        proxy: {
            type: 'jsonp',
            url : WeatherApp.app.weatherAPI + WeatherApp.app.defaultCountry,
            reader: {
                type: 'json'
            }
        }
    }
});