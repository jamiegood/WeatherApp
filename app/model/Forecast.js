Ext.define('WeatherApp.model.Forecast', {
    extend: 'Ext.data.Model',
    config: {
        fields: ['dt_text', 'wind', 'dt', 'main', 'weather']
    }
});