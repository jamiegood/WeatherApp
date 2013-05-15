Ext.define('WeatherApp.store.Weather', {
    extend: 'Ext.data.Store',

    config: {
        model: 'WeatherApp.model.Weather',

        //autoLoad: true,
        //pageSize: 10,

        proxy: {
            type: 'jsonp',
            reader: {
                type: 'json'
            }
        }
    }
});/**
 * Created with JetBrains PhpStorm.
 * User: jgood
 * Date: 15/05/13
 * Time: 15:29
 * To change this template use File | Settings | File Templates.
 */
