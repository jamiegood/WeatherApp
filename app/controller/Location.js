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
				
				console.log('AM IIII CALLLED');
        //Ext.getStore('Location').on('load', this.onLocationLoad);
				Ext.getStore('Location').load({
				    callback: function(records, operation, success) {
				        // the operation object contains all of the details of the load operation
								console.log(' call back');
				        console.log(records);
				
								console.log('//////////////////////');
								Ext.getStore('Location').getAt(0).get('location') 
								
								
								console.log('XXXxxxxxxxx');
								Ext.getStore('Weather').setProxy({url: WeatherApp.app.weatherAPI + 'Dublin,ie'});
								
								console.log(Ext.getStore('Weather'));
								Ext.getStore('Weather').load();
								
				    },
				    scope: this
				});
    },

    onLocationLoad: function(store) {

			console.log('+++++++++++');
			console.log(store.getData());
      Ext.Msg.alert('Status', 'on locaiton load add .');


/*
        var main = Ext.getCmp('main'),
            runList = Ext.getCmp('runList'),
            noFriends = Ext.getCmp('noFriends');

        if (store.getCount()) {
            if (!runList) {
                runList = Ext.create('JWF.view.run.List', {
                    id: 'runList'
                });
            }
            main.setActiveItem(runList);
        } else {
            if (!noFriends) {
                noFriends = Ext.create('JWF.view.NoFriends', {
                    id: 'noFriends',
                    data: JWF.userData
                });
            }
            main.setActiveItem(noFriends);
        }
*/
    },


/*
    showForm: function() {
        if (!this.addRunForm) {
            this.addRunForm = Ext.create('JWF.view.Form', {
                id: 'runForm'
            });
        }
        Ext.Viewport.setActiveItem(this.addRunForm);
    },

    hideForm: function() {
        Ext.Viewport.setActiveItem(Ext.getCmp('main'));
        Ext.getCmp('runForm').hide();
    },
*/
    addLocation: function() {

      //Ext.Msg.alert('Status', 'add location.');
			var location = Ext.getCmp('addLocationField').getValue();
			console.log(location);
			
			var locationStore = Ext.getStore('Location');
			console.log(locationStore.getCount());
			
			var new_location = {location: location};
			locationStore.add(new_location);
			locationStore.sync();
			
			
			console.log(locationStore);
			
			console.log(locationStore.getCount());
			
/*
        var distance = Ext.getCmp('distanceField').getValue(),
            location = Ext.getCmp('locationField').getValue(),
            caption = JWF.userData.first_name + ' ran ' + distance + ' miles';

        if (location) {
            caption += ' in ' + location;
        }

        Ext.getCmp('runForm').setMasked({
            xtype: 'loadmask',
            message: 'Adding New Jog...'
        });

        Ext.Ajax.request({
            url: '/run',
            method: 'POST',
            params: {
                location: location,
                distance: distance
            },
            callback: this.onAddRun,
            scope: this
        });
*/
    },

    onAddLocation: function(options, success, response) {
	/*
        Ext.getCmp('runForm').setMasked(false);
        this.hideForm();
        Ext.getStore('Runs').load();
*/
    }
});
