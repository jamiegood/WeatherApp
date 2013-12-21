Ext.define('WeatherApp.controller.Forecast', {

    extend: 'Ext.app.Controller',

    config: {

        refs: {
            refreshBtn: '#refreshForecast'
        },

        control: {
            refreshBtn: {
                tap: 'doRefresh'
            }
        }

    },

    init: function() {

        console.log('init in forefacst js');
        this.callParent();
        this.doWeatherLoad();

    },
    doRefresh: function(list, idx, el, record) {

        console.log('who are  you');
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

        var mystore = Ext.getStore('Forecast').setProxy({
            url: WeatherApp.util.Config.getWeatherForecastAPI()
        });

        console.log('Forecast getWeatherForecastAPI --------------');
        console.log(WeatherApp.util.Config.getWeatherForecastAPI());
        mystore.load({
            callback: function(records, operation, success) {
                console.log('STAT TTTtTTTTTTTTTTTTTTTTTTT');
                console.log(records);
                console.log(operation);
                console.log(success);
                console.log('END TTTtTTTTTTTTTTTTTTTTTTT');

            }
        });

    }

});
