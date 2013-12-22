Ext.define('WeatherApp.view.Forecast', {
	extend: 'Ext.List',
	xtype: 'forecast',

	/* Configure the tab here */
	config: {
		title: '5 Day',
		//title on the tab button
		iconCls: 'locate',
		//icon on the tab button
		disableSelection: true,

		/* attach this list component to the weather store */
		store: 'Forecast',

		items: [{
			docked: 'top',
			xtype: 'toolbar',
			title: '5 Day Forecastxx',
			id: 'mainToolbar2',
			cls: '',
			items: [

			{
				xtype: 'spacer'
			}, {
				xtype: 'button',
				cls: 'refreshWeather',
				iconCls: 'refresh',
				id: 'refreshForecast'
			}

			]
		}],

		/* markup for the data returned from the store */
		itemTpl: Ext.create('Ext.XTemplate', '<div class="">'

        )
	},

	initialize: function() {
		this.callParent();
	}

});
