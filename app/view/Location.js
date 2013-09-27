Ext.define('WeatherApp.view.Location', {
	extend: 'Ext.Container',
	xtype: 'location',
	requires: ['WeatherApp.view.Searchbar'],

	config: {
		title: 'Location',
		iconCls: 'settings',
		items: [{
			docked: 'top',
			xtype: 'toolbar',
			title: 'Location'
		}, {
			xtype: 'searchbar'
		}, {
			xtype: 'spacer'
		}, {
			xtype: 'button',
			text: 'Save',
			id: 'addLocation'
		}, {
			xtype: 'panel',
			html: 'Or'
		}, {
			xtype: 'button', 
			text: 'Use current location',
			id: 'currentLocation',
		}]
	}
});
