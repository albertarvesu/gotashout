Ext.define('Gotashout.view.Settings', {
    extend: 'Ext.Panel',
    xtype: 'settingscard',

    config: {
        iconCls: 'settings',
        title: 'Settings',
        scrollable: 'vertical',
        styleHtmlContent: true,
        type: 'vbox',
        items: [
            {
                xtype: 'panel',
                id: 'fbProfile'
            },
            {
                xtype: 'spacer'
            },
            {
                text: 'Logout',
                id: 'logout',
                xtype: 'button'
            },
            {
                xtype: 'spacer'
            },
            {
                text: 'Terms of Service',
                id: 'terms',
                xtype: 'button'
            },
            {
                text: 'Privacy Policy',
                id: 'Privacy',
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