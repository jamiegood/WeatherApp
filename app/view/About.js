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
			xtype: 'toolbar',
			title: 'About why not show'
		}
	},

	/*contents of tab */
	html: 'The about page'

});
