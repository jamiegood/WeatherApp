Ext.define('WeatherApp.view.Weather', {
    extend: 'Ext.List',
    xtype: 'weather',

    /* Configure the tab here */
    config: {
        title: 'Weather',  //title on the tab button
        iconCls: 'star',     //icon on the tab button

        /* attach this list component to the weather store */
        store: 'Weather',

        /* create a title bar for the tab panel */
        items: {
            docked: 'top',
            xtype: 'titlebar',
            title: 'Weather'
        },

        /* markup for the data returned from the store */
        itemTpl: Ext.create('Ext.XTemplate',
            '<div class="">',
            '<h2>{name}, {[values.sys.country]}</h2>',
            '<p>Weather: {[values.weather[0].description]}</p>',
            '<p>Temperature: {[values.main.temp]} &#8451;</p>',
            '<p>Humidity: {[values.main.humidity]} %</p>',
            '<p>Min Temp: {[values.main.temp_min]} &#8451;</p>',
            '<p>Max Temp: {[values.main.temp_max]} &#8451;</p>',
            '</div>'
        )
    },

    initialize: function() {
        this.callParent();
        this.getStore().load({
            /* use config variable set in app.js */
            url: WeatherApp.app.weatherAPI + WeatherApp.app.defaultCountry
        });
    }

});