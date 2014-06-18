Ext.define('WeatherApp.model.WeatherToday', {
    extend: 'Ext.data.Model',
    config: {
        fields: ['coord', 'name', 'sys', 'weather', 'main']
    }
});