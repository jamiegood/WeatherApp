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
            storedLocation = WeatherApp.util.Config.defaultCountry;
        } else {
            storedLocation = Ext.getStore('Location').getAt(0).get('location');
        }

        var mystore = Ext.getStore('Forecast').setProxy({
            url: WeatherApp.util.Config.getWeatherAPI() + storedLocation
        });

        console.log('--------------');
        console.log(storedLocation);
        mystore.load({
            callback: function(records, operation, success) {
                console.log(records);
                console.log(operation);
                console.log(success);
            }
        });

    }

});
