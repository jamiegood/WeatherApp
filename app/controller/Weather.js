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

    doRefresh: function(list, idx, el, record) {
        Ext.getStore('Weather').load();
    }
});
