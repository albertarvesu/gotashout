/**
 * The class controls the adding of new Shouts to the database.
 */
Ext.define('Gotashout.controller.Shouts', {
    extend: 'Ext.app.Controller',

    config: {
        control: {
            '#addShoutBtn': {
                tap: 'addShout'
            },
            '#cancelShoutBtn': {
                tap: 'cancelShout'
            }
        }
    },

    init: function() {
        this.callParent();
        //Ext.getStore('Shouts').on('load', this.onShoutsLoad);
    },
/*
    onShoutsLoad: function(store) {

        var home = Ext.getCmp('home'),
            feed = Ext.getCmp('feed'),
            shoutList = Ext.getCmp('shoutList'),
            noFriends = Ext.getCmp('noFriends');


        if (store.getCount()) {
            if (!shoutList) {
                shoutList = Ext.create('Gotashout.view.shout.List', {
                    id: 'shoutList'
                });
            }

            if(!feed) {
                feed = Ext.create('Gotashout.view.Feed', {
                    id: 'feed',
                    xtype: 'feedcard'
                });   
            }

            home.add(feed);
            feed.setActiveItem(shoutList);
            
        } else {
            return;
            if (!noFriends) {
                noFriends = Ext.create('Gotashout.view.NoFriends', {
                    id: 'noFriends',
                    data: Gotashout.userData
                });
            }
            home.setActiveItem(noFriends);
        }
    },

    showForm: function() {
        if (!this.addShoutForm) {
            this.addShoutForm = Ext.create('Gotashout.view.Form', {
                id: 'runForm'
            });
        }
        Ext.Viewport.setActiveItem(this.addShoutForm);
    },

    hideForm: function() {
        Ext.Viewport.setActiveItem(Ext.getCmp('main'));
        Ext.getCmp('runForm').hide();
    },
*/
    cancelShout: function() {
        //Ext.getCmp('shoutForm').reset();
        Ext.getCmp('home').setActiveItem(0);
    },

    addShout: function() {

        var mood = Ext.getCmp('mood').getValue(),
                    text = Ext.getCmp('text').getValue(),
                    location = Ext.getCmp('location').getValue();

        Ext.getCmp('shoutForm').setMasked({
            xtype: 'loadmask',
            message: 'Shouting out...'
        });

        Ext.Ajax.request({
            url: '/shout',
            method: 'POST',
            params: {
                mood: mood,
                text: text,
                location: location
            },
            callback: this.onAddShout,
            scope: this
        });
    },

    onAddShout: function(options, success, response) {
        Ext.getCmp('shoutForm').setMasked(false);
        Ext.getStore('Shouts').load();
    }
});
