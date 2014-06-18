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
		itemTpl: Ext.create('Ext.XTemplate', '<div class="">', '<h2>{cod}, {message}</h2>', '<p>Time: {[this.timeFormat(new Date())]}</p>', '<p>Weather: {[values.weather[0].description]}</p>', '<img src="' + WeatherApp.util.Config.getOpenweatherimages() + '{[values.weather[0].icon]}"/>',

		'<p>Temperature: {[values.main.temp]} &#8451;</p>', '<p>Humidity: {[values.main.humidity]} %</p>', '<p>Min Temp: {[values.main.temp_min]} &#8451;</p>', '<p>Max Temp: {[values.main.temp_max]} &#8451;</p>', '</div>', {
			timeFormat: function(date) {

				var days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
				var newDate = date;

				return days[newDate.getDay() - 1] + " " + newDate.getHours() + ":" + newDate.getMinutes() + ":" + newDate.getSeconds();
			}
		})
	},

	initialize: function() {
		this.callParent();
	}

});
