Ext.define('WeatherApp.view.About', {
	extend: 'Ext.Container',
	xtype: 'about',

	/* Configure the tab here */
	config: {
		title: 'About',
		iconCls: 'settings',

		/* Create a title bar for the tab panel */
		items: {
			docked: 'top',
			xtype: 'titlebar',
			title: 'About'
		}
	},

	/*contents of tab */
	html: 'The about page'

});
