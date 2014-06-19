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
		itemTpl: Ext.create('Ext.XTemplate',
            '<div class="">',
            '<h2>fffff </h2>',
            '<p>Date: {[values.dt_txt]}</p>',
            '<p>Main temp: {[values.main.temp]}</p>',
            '<p>Main temp_min: {[values.main.temp_min]}</p>',
            '<p>Main temp_max: {[values.main.temp_max]}</p>',
            '<p>Main humidity: {[values.main.humidity]}</p>',
            '<p>Weather main: {[values.weather[0].main]}</p>',
            '<p>Weather description: {[values.weather[0].description]}</p>',
            '<p>Weather icon: {[values.weather[0].icon]}</p>',

		{
			timeFormat: function(date, values) {

                console.log('--- Values ---');
               // console.log(values.dt_txt);

				var days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
				var newDate = date;

                return values.dt_txt;

				//return days[newDate.getDay() - 1] + " " + newDate.getHours() + ":" + newDate.getMinutes() + ":" + newDate.getSeconds();
			}
		})
	},

	initialize: function() {
		this.callParent();
	}

});
