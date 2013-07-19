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
			console.log('weatherapp controller ');
		},
    doRefresh: function(list, idx, el, record) {
        Ext.getStore('Weather').load();
    }
});
