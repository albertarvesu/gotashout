Ext.define('Gotashout.view.Home', {
    extend: 'Ext.TabPanel',
    xtype: 'homeview',
    requires: [
        'Gotashout.view.Feed',
        'Gotashout.view.Shout',
        'Gotashout.view.Settings',
        'Gotashout.view.shout.List'
    ],

    config: {
        id: 'Home',
        ui: 'dark',
        tabBar: {
            docked: 'bottom',
            layout: {
                pack: 'center'
            }
        },
        items: [
            {
                xtype: 'feedcard'
            },
            {
                xtype: 'shoutcard'
            },
            {
                xtype: 'settingscard'
            }
        ]
    }
});