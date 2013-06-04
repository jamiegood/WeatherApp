Ext.define('WeatherApp.view.Location', {
    extend: 'Ext.Container',
    xtype: 'location',


    config: {
      	title: 'Location',
      	iconCls: 'settings',
        //layout: 'card',
        items: [
            {
                //layout: 'fit',
                //cls   : 'searchcontainer',
                //itemId: 'searchcontainer',
                //items: [
                 //   {
                        docked: 'top',
                        xtype : 'searchbar'
                  //  }
               // ]
            }
        ]
    }
});