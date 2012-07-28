Ext.define('Gotashout.view.Home', {
    extend: 'Ext.TabPanel',
    xtype: 'homeview',
    requires: [
        'Gotashout.view.Feed',
        'Gotashout.view.Form',
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
                docked: 'top',
                xtype: 'titlebar',
                title: 'Got A Shout!'
            },
            {
                xtype: 'feedcard'
            },
            {
                xtype: 'formcard'
            },
            {
                xtype: 'settingscard'
            }
        ]
    },

    initialize: function() {
        this.callParent();

        // Enable the Tap event on the profile picture in the toolbar, so we can show a logout button
        var meta = Ext.getCmp('signout');
        if (meta) {
            meta.element.on('tap', function(e) {
                meta.fireEvent('tap', meta, e);
            });
        }
    }
});