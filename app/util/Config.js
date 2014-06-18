Ext.define('WeatherApp.util.Config', { 
    singleton : true,
    alias : 'widget.appConfigUtil',
    config : {
        openweatherimages : 'http://openweathermap.org/img/w/',
        base: 'http://api.openweathermap.org/data/2.5/', 
        daily: 'weather?units=metric&q=',
        fiveDay: 'forecast/?mode=json&units=metric&cnt=5&daily&q=',
    	country: 'Dublin,ie'
    },
    constructor: function(config) {
        this.initConfig(config);
        this.callParent([config]);

    },
    getWeatherTodayAPI: function() {

        console.log(this.config.base + this.config.daily + this.config.country)
        return this.config.base + this.config.daily + this.config.country;

    }, 
    getWeatherForecastAPI: function() {
        console.log(this.config.base + this.config.fiveDay + this.config.country);
        return this.config.base + this.config.fiveDay + this.config.country;
    },
    setCountry: function(location) {
        this.config.country = location;
    },
    getCountry: function() {
        return this.config.country;
    }

})

//http://api.openweathermap.org/data/2.5/forecast/daily?q=London&mode=json&units=metric&cnt=7