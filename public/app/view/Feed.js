Ext.define('Gotashout.view.Feed', {
    extend: 'Ext.Container',
    xtype: 'feedcard',

    requires: [
        'Gotashout.view.shout.List'
    ],

    config: {
        iconCls: 'team',
        title: 'Feeds',
        //styleHtmlContent: true,
        //cls: 'styledContent',
        //scrollable: 'vertical',
        items: [
            {
                docked: 'top',
                xtype: 'toolbar',
                id: 'mainToolbar',
                cls: 'jogToolbar',
                title: 'Got A Shout!',
                items: [
                    {   xtype: 'spacer'   },
                    {
                        xtype: 'button',
                        cls: 'fbButton',
                        iconCls: 'showFormBtn',
                        id: 'showFormButton'
                    },
                    {
                        xtype: 'button',
                        cls: 'fbButton',
                        iconCls: 'signoutBtn',
                        id: 'signout'
                    }
                ]
            }
        ]
    },

    initialize: function initialize() {
        this.callParent();

        var shoutList = Ext.getCmp('shoutList')
        var me = this;
        
        Ext.getStore('Shouts').on('load', function(store) {
            console.log("initialize", store, store.getCount());

            if (!shoutList) {
                shoutList = Ext.create('Gotashout.view.shout.List', {
                    id: 'shoutList'
                });
            }

            me.setActiveItem(shoutList);
        });
    }
});