/**
 * The class controls the adding of new Runs to the database.
 */
Ext.define('WeatherApp.controller.Location', {
    extend: 'Ext.app.Controller',

    config: {
        control: {
            '#addLocation': {
                tap: 'addLocation'
            }
        }
    },

    init: function() {
        this.callParent();

    },

    onLocationLoad: function(store) {

      Ext.Msg.alert('Status', 'on locaiton load add .');

    },

    addLocation: function() {

			var location = Ext.getCmp('addLocationField').getValue();
			
			var locationStore = Ext.getStore('Location');
			locationStore.removeAll();
			var new_location = {location: location};
			locationStore.add(new_location);
			locationStore.sync();
			
			this.getApplication().getController('Weather').doWeatherLoad();

    }
});
