Ext.define('WeatherApp.view.Main', {
	extend: 'Ext.tab.Panel',
	xtype: 'main',

	config: {

		tabBarPosition: 'bottom',
		defaults: {
			styleHtmlContent: true
		},
		items: [{
			xtype: 'weatherToday'
		}, {
			xtype: 'forecast'
		}, {
			xtype: 'location'
		}, {
			xtype: 'about'
		}]
	}
});
