Ext.define('Gotashout.view.Settings', {
    extend: 'Ext.Panel',
    xtype: 'settingscard',

    config: {
        iconCls: 'settings',
        title: 'Settings',
        styleHtmlContent: true,
        cls: 'styledContent',
        scrollable: 'vertical',
        items: [
            {
                text: 'Logout',
                xtype: 'button'
            },
            {
                text: 'Terms of Use',
                xtype: 'button'
            }
        ]
    }
});