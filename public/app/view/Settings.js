Ext.define('Gotashout.view.Settings', {
    extend: 'Ext.Panel',
    xtype: 'settingscard',

    config: {
        iconCls: 'settings',
        title: 'Settings',
        scrollable: 'vertical',
        items: [
            {
                xtype: 'panel',
                styleHtmlContent: true,
                cls: 'styledContent',
                html: [ 
                    '<div class="fbProfile">',
                    '<img src="https://graph.facebook.com/'+ Gotashout.fbUser.id +'/picture?type=square" />',
                    '<div class="name"><span>'+ Gotashout.fbUser.name +'</span><span>via Facebook</span></div>',
                    '</div>'
                ].join(" ")
            },
            {
                xtype: 'spaces'
            },
            {
                text: 'Logout',
                xtype: 'button'
            },
            {
                xtype: 'spaces'
            },
            {
                text: 'Terms of Service',
                xtype: 'button'
            },
            {
                text: 'Privacy Policy',
                xtype: 'button'
            },
        ]
    }
});