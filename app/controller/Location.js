Ext.define('WeatherApp.controller.Location', {
    extend: 'Ext.app.Controller',

    config: {
        control: {
            '#addLocation': {
							tap: 'addLocation'
            },
						'#currentLocation': {
							tap: 'currentLocation'
						}
        }
    },

    init: function() {
        this.callParent();

    },

    addLocation: function() {

			var location = Ext.getCmp('addLocationField').getValue();
			
			var locationStore = Ext.getStore('Location');
			locationStore.removeAll();
			var new_location = {location: location};
			locationStore.add(new_location);
			locationStore.sync();
			
			this.getApplication().getController('Weather').doWeatherLoad();

    },

    currentLocation: function() {

      Ext.Msg.alert('Status', 'To Do');

    },
});
