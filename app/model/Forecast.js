Ext.define('WeatherApp.model.Forecast', {
    extend: 'Ext.data.Model',
    config: {
        fields: ['dt', 'main', 'dt_txt', 'weather']
    }
});