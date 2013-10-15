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

        console.log('[[[[[[[[[[[[[[[[[[[[[[[');
        this.doWeatherLoad();
    },
    doWeatherLoad: function() {

        var storedLocation;

        if (Ext.getStore('Location').getCount() == 0) {
            storedLocation = WeatherApp.util.Config.getCountry();
        } else {
            storedLocation = Ext.getStore('Location').getAt(0).get('location');
        }

        console.log('nnnnnnndddddddddddddd');
        //set the default location in the config location variable
        WeatherApp.util.Config.setCountry(storedLocation);

        console.log(WeatherApp.util.Config.getCountry());
        console.log('config get country above');
        console.log(WeatherApp.util.Config.getWeatherTodayAPI());
        console.log('WeatherApp.util.Config.getWeatherTodayAPI()');

        var mystore = Ext.getStore('WeatherToday').setProxy({
            //url: WeatherApp.util.Config.getWeatherTodayAPI()            
        });
        mystore.load({
            callback: function(records, operation, success) {
                console.log('store call back complete');
                console.log(records);
                console.log(operation);
                console.log(success);
            }
        });

    }

});
