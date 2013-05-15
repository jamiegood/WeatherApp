Ext.define('WeatherApp.model.Weather', {
    extend: 'Ext.data.Model',
    config: {
        fields: ['name', 'main', 'country', 'sys']
    }
});