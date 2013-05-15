Ext.define('WeatherApp.view.Weather', {
    extend: 'Ext.Container',
    xtype: 'weather',

    /* Configure the tab here */
    config: {
        title: 'Weather',  //title on the tab button
        iconCls: 'time',     //icon on the tab button

        /* create a title bar for the tab panel */

        items: {
            docked: 'top',
            xtype: 'titlebar',
            title: 'Weather'
        }
    },

    /*contents of tab */
    html: 'The weather page'

});
