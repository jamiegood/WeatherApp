Ext.define('WeatherApp.controller.WeatherToday', {

    extend: 'Ext.app.Controller',

    config: {

        refs: {
            refreshBtn: '#refreshWeather'
        },

        control: {
            refreshBtn: {
                tap: 'doRefresh'
            }
        }

    },

    init: function() {
        this.callParent();
        this.doWeatherLoad();

    },
    doRefresh: function(list, idx, el, record) {
        this.doWeatherLoad();
    },
    doWeatherLoad: function() {

        var storedLocation;

        if (Ext.getStore('Location').getCount() == 0) {
            storedLocation = WeatherApp.util.Config.getCountry();
        } else {
            storedLocation = Ext.getStore('Location').getAt(0).get('location');
            WeatherApp.util.Config.setCountry(storedLocation);
        }

        var mystore = Ext.getStore('WeatherToday').setProxy({
            url: WeatherApp.util.Config.getWeatherTodayAPI()
        });

        console.log('weather today getWeatherTodayAPI --------------');
        console.log(WeatherApp.util.Config.getWeatherTodayAPI());
        mystore.load({
            callback: function(records, operation, success) {
                console.log('STAT getWeatherTodayAPI');
                console.log(records);
                //console.log(operation);
                //console.log(success);
                console.log('END getWeatherTodayAPI');

            }
        });

    }

});
