Ext.define('WeatherApp.controller.Weather', {

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
            storedLocation = WeatherApp.util.Config.defaultCountry;
        } else {
            storedLocation = Ext.getStore('Location').getAt(0).get('location');
        }

        var mystore = Ext.getStore('Weather').setProxy({
            url: WeatherApp.util.Config.weatherAPI + storedLocation
        });
        mystore.load({
            callback: function(records, operation, success) {
                console.log(records);
                console.log(operation);
                console.log(success);
            }
        });

    }

});
