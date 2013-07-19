Ext.define('WeatherApp.view.Searchbar', {
    extend: 'Ext.Toolbar',
    xtype : 'searchbar',
    requires: ['Ext.field.Text', 'Ext.field.Search'],

    config: {
        items: [
            {
                xtype: 'title',
                title: 'Enter Location'
            },
            {
                xtype: 'searchfield',
                placeHolder: 'Search..ssss.',
                id: 'addLocationField'
            }
        ]
    }
});