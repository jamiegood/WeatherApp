Ext.define('WeatherApp.model.WeatherToday', {
    extend: 'Ext.data.Model',
    config: {
        fields: ['name', 'main', 'country', 'sys', 'weather']
    }
});