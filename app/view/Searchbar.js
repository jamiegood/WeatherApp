Ext.define('WeatherApp.view.Searchbar', {
    extend: 'Ext.Toolbar',
    xtype : 'searchbar',
    requires: ['Ext.field.Text', 'Ext.field.Search'],

    config: {
        //ui: 'searchbar',
        //layout: 'vbox',
        //cls: 'big',
       // height: '4.7em',

        items: [
            {
                xtype: 'title',
                title: 'Enter Location'
            },
            {
                xtype: 'searchfield',
                placeHolder: 'Search...'
            }
        ]
    }
});