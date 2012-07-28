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
                id: 'fbProfile'
            },
            {
                xtype: 'spacer'
            },
            {
                text: 'Logout',
                id: 'logout'
                xtype: 'button'
            },
            {
                xtype: 'spacer'
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
    },

    initialize: function initialize() {
        this
            .down("#fbProfile")
            .setHtml([ 
                '<div class="fbUser">',
                '<img src="https://graph.facebook.com/'+ Gotashout.fbUser.id +'/picture?type=square" />',
                '<div><span class="name">'+ Gotashout.fbUser.name +'</span><span class="via"> via Facebook</span></div>',
                '</div>'
            ].join(" "));
    }
});