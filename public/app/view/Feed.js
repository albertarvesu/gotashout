Ext.define('Gotashout.view.Feed', {
    extend: 'Ext.Panel',
    xtype: 'feedcard',

    requires: [
        'Gotashout.view.shout.List'
    ],

    config: {
        iconCls: 'team',
        title: 'Feeds',
        styleHtmlContent: true,
        cls: 'styledContent',
        scrollable: 'vertical',
        items: [
            {
                docked: 'top',
                xtype: 'toolbar',
                id: 'mainToolbar',
                cls: 'jogToolbar',
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
    }
});