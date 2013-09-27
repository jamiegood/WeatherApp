Ext.define('WeatherApp.util.Config', { 
    singleton : true,
    alias : 'widget.appConfigUtil',
    config : {
        openweatherimages : 'http://openweathermap.org/img/w/',
        weatherAPI: 'http://api.openweathermap.org/data/2.5/weather?units=metric&q=',
    	defaultCountry: 'Dublin,ie',
    },
    constructor: function(config) {
        this.initConfig(config);
        this.callParent([config]);
    }
})