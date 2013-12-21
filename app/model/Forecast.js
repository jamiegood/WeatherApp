Ext.define('WeatherApp.model.Forecast', {
    extend: 'Ext.data.Model',
    config: {
        fields: ['cod', 'message']
    }
});