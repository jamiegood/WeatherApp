Ext.define('WeatherApp.model.Forecast', {
    extend: 'Ext.data.Model',
    config: {
        fields: ['name', 'main', 'country', 'sys', 'weather']
    }
});