/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/

// DO NOT DELETE - this directive is required for Sencha Cmd packages to work.
//@require @packageOverrides

//<debug>
Ext.Loader.setPath({
    'Ext': 'touch/src',
    'WeatherApp': 'app'
});
//</debug>

Ext.application({
    name: 'WeatherApp',

    requires: [
        'Ext.MessageBox',
				'Ext.data.JsonP'
    ],

    /* configuration openweathermap API */
    weatherAPI: 'http://api.openweathermap.org/data/2.5/weather?units=metric&q=',
    defaultCountry: 'Dublin,ie',
		//defaultCountry: '',
    openweatherimages: 'http://openweathermap.org/img/w/',

    models: [
        'Weather',
        'Location'
    ],

    controllers: [
        'Weather',
        'Location'
    ],

    stores: [
        'Weather',
        'Location'
    ],

    views: [
        'Main',
        'About',
        'Weather',
	    'Location'
    ],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function() {
        // Destroy the #appLoadingIndicator element

				console.log('App launch');
        //Ext.getStore('Location').on('load', this.onLocationLoad);
				// Ext.getStore('Location').load({
				//     callback: function(records, operation, success) {
				//         // the operation object contains all of the details of the load operation
				// 				console.log(' call back');
				//         console.log(records);
				// 
				// 				console.log('////////////////////// LOCATON FROM STORE');
				// 				var storedLocation = Ext.getStore('Location').getAt(0).get('location');
				// 				
				// 				
				// 				
				// 				console.log(storedLocation);
				// 				Ext.getStore('Weather').setProxy({url: WeatherApp.app.weatherAPI + storedLocation});
				// 				
				// 				console.log(Ext.getStore('Weather'));
				// 				Ext.getStore('Weather').load({
				// 					callback: function(records, operation, success) {
				// 						console.log('inside weather callback');
				// 						console.log(records);
				// 						console.log(operation);
				// 						console.log(success);
				// 					}
				// 				});
				// 				
				//     },
				//     scope: this
				// });
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        Ext.Viewport.add(Ext.create('WeatherApp.view.Main'));
    }

});
