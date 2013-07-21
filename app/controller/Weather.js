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

			if(Ext.getStore('Location').getCount() == 0) {
				storedLocation = WeatherApp.app.defaultCountry;
				console.log('GET COUTN is equal to 0');
			} else {
				storedLocation = Ext.getStore('Location').getAt(0).get('location');
				console.log('GET COUTN is equal to ' + storedLocation);
				
			}
			console.log('do weather load' + storedLocation);
			
			var mystore = Ext.getStore('Weather').setProxy({url: WeatherApp.app.weatherAPI + storedLocation});
			mystore.load({
				callback: function(records, operation, success) {
					console.log('inside weather callback');
					console.log(records);
					console.log(operation);
					console.log(success);
				}
			});

		}
		
});
