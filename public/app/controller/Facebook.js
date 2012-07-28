Ext.define('Gotashout.controller.Facebook', {
    extend: 'Ext.app.Controller',
    config: {
        control: {
            "#logout": {
                tap: 'onUserTap'
            },
            "#doLogout": {
                tap: 'logout'
            }
        }
    },

    onUserTap: function(component) {

        if (!this.logoutCmp) {
            this.logoutCmp = Ext.create('Ext.Panel', {
                width: 120,
                top: 0,
                left: 0,
                padding: 5,
                modal: true,
                hideOnMaskTap: true,
                items: [
                {
                    xtype: 'button',
                    id: 'doLogout',
                    text: 'Logout',
                    ui: 'decline'
                }
                ]
            });
        }

        this.logoutCmp.showBy(component);

    },

    logout: function(component) {

        Ext.Viewport.setMasked({xtype: 'loadmask', message: 'Logging out...'});
        FB.logout();
    },

    init: function(application) {

        window.fbAsyncInit = Ext.bind(this.onFacebookInit, this);

        (function(d){
            var js, id = 'facebook-jssdk'; if (d.getElementById(id)) {return;}
            js = d.createElement('script'); js.id = id; js.async = true;
            js.src = "//connect.facebook.net/en_US/all.js";
            d.getElementsByTagName('head')[0].appendChild(js);
        }(document));
    },

    onFacebookInit: function() {

        var me = this;

        FB.init({
            appId  : Gotashout.app.facebookAppId,
            cookie : true
        });

        FB.Event.subscribe('auth.logout', Ext.bind(me.onLogout, me));


        FB.getLoginStatus(function(response) {

            clearTimeout(me.fbLoginTimeout);

            me.hasCheckedStatus = true;

            Ext.Viewport.setMasked(false);

            if (response.status == 'connected') {
                me.onLogin();
            } else {
                me.login();
            }
        });


        me.fbLoginTimeout = setTimeout(function() {

            Ext.Viewport.setMasked(false);

            Ext.create('Ext.MessageBox', {
                title: 'Facebook Error',
                message: [
                'Facebook Authentication is not responding. ',
                'Please check your Facebook app is correctly configured, ',
                'then check the network log for calls to Facebook for more information.',
                'Restart the app to try again.'
                ].join('')
            }).show();

        }, 10000);

    },

    login: function() {
        Ext.getCmp('Main').showAuthenticateText();
    },

    onLogin: function() {

        var me = this,
            errTitle;

        FB.api('/me', function(response) {

            if (response.error) {
                FB.logout();

                errTitle = "Facebook " + response.error.type + " error";

                Ext.Msg.alert(errTitle, response.error.message, function() {
                    me.login();
                });

            } else {
                Gotashout.fbUser = response;

                if (!me.home) {
                    me.home = Ext.create('Gotashout.view.Home', {
                        id: 'home'
                    });
                }
                Ext.Viewport.setActiveItem(me.home);
                Ext.getStore('Shouts').load();
            }
        });
    },

    onLogout: function() {

        if (!this.hasCheckedStatus) return;

        this.login();

        Ext.Viewport.setMasked(false);
        Ext.Viewport.setActiveItem(Ext.getCmp('Main'));

        if(this.logoutCmp) {
            this.logoutCmp.destroy();
        }
    }

});