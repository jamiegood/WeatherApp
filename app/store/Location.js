Ext.define('WeatherApp.store.Location', {
    extend: 'Ext.data.Store',

    config: {
        model: 'WeatherApp.model.Location',
        autoLoad: true,
        proxy: {
            proxy: {
                type: 'memory'
            }
        }
    }
});
