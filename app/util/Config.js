Ext.define('WeatherApp.util.Config', { 
    singleton : true,
    alias : 'widget.appConfigUtil',
    config : {
        openweatherimages : 'http://openweathermap.org/img/w/',
        base: 'http://api.openweathermap.org/data/2.5/', 
        daily: 'weather?units=metric&q=',
        fiveDay: 'forecast/?mode=json&units=metric&cnt=5&daily&q=',
    	defaultCountry: 'Dublin,ie',
    },
    constructor: function(config) {
        this.initConfig(config);
        this.callParent([config]);
    },
    daily: function() {

    }, 
    forecast: function() {
        
    }

})

//http://api.openweathermap.org/data/2.5/forecast/daily?q=London&mode=json&units=metric&cnt=7