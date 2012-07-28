Ext.define('Gotashout.view.Home', {
    extend: 'Ext.TabPanel',
    xtype: 'homeview',
    requires: [
        'Gotashout.view.Feed',
        'Gotashout.view.Shout',
        'Gotashout.view.Settings'
    ],

    config: {
        ui: 'dark',
        tabBar: {
            docked: 'bottom',
            layout: {
                pack: 'center'
            }
        },
        items: [
            {
                xtype: 'toolbar',
                title: 'Got A Shout!',
            },
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