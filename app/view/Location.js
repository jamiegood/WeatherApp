Ext.define('WeatherApp.view.Location', {
	extend: 'Ext.Container',
	xtype: 'location',
	requires: ['WeatherApp.view.Searchbar'],

	config: {
		title: 'Location',
		iconCls: 'settings',
		items: [{
			docked: 'top',
			xtype: 'titlebar',
			title: 'Location'
		}, {
			xtype: 'searchbar'
		}, {
			xtype: 'spacer'
		}, {
			xtype: 'button',
			text: 'Add Location',
			id: 'addLocation'
		}]
	}
});
