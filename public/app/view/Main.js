Ext.define("Gotashout.view.Main", {
    extend: 'Ext.tab.Panel',
    requires: [
        'Ext.TitleBar'
    ],
    config: {
        id: 'Main',
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Welcome',
                iconCls: 'home',

                styleHtmlContent: true,
               // scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Got A Shout!'
                },

                html: [
                    "Welcome to Gotashout!"
                ].join("")
            },
            {
                title: 'Join',
                iconCls: 'user',
                styleHtmlContent: true,

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Let\'s Get Started..'
                    },
                    {
                        xtype: 'panel',
                        id: 'Authenticate'
                    }
                ]
            }
        ]
    },

    showAuthenticateText: function() {

        var redirectUrl = Ext.Object.toQueryString({
            redirect_uri: window.location.protocol + "//" + window.location.host + window.location.pathname,
            client_id: Gotashout.app.facebookAppId,
            response_type: 'token'
        });

        this
            .down("#Authenticate")
            .setHtml([
                '<div class="fbAuthenticate">',
                '<h2>Welcome to Got A Shout Mobile.</h2>',
                '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent odio leo, sollicitudin posuere sollicitudin vel, blandit eu nunc. Vestibulum consectetur eros nec lorem dignissim viverra</p>',
                '<p>Login your Facebook account below.</p>',
                '<a class="fbLogin" href="https://m.facebook.com/dialog/oauth?' + redirectUrl + '"></a>',
                '<div class="fb-facepile" data-app-id="' + Gotashout.app.facebookAppId + '" data-max-rows="2" data-width="300"></div>',
                '</div>'
            ].join(''));
    }
});
