Ext.define('WeatherApp.view.Location', {
    extend: 'Ext.Container',
    xtype: 'location',
    requires: ['WeatherApp.view.Searchbar'],

    config: {
      	title: 'Location',
      	iconCls: 'settings',
        //layout: 'card',
        items: [

										{
										    docked: 'top',
										    xtype: 'titlebar',
										    title: 'Location'
										},
            {
                //layout: 'fit',
                //cls   : 'searchcontainer',
                //itemId: 'searchcontainer',
                //items: [
                 //   {
                       // docked: 'top',
                        xtype : 'searchbar'
                  //  }
               // ]
            }


        ]
    }
});
