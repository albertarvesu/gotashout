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
                tap: 'showForm'
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
*/
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

    addShout: function() {
        console.log("about to add a shout");
        return;
        var distance = Ext.getCmp('distanceField').getValue(),
            location = Ext.getCmp('locationField').getValue(),
            caption = Gotashout.userData.first_name + ' ran ' + distance + ' miles';

        if (location) {
            caption += ' in ' + location;
        }

        Ext.getCmp('runForm').setMasked({
            xtype: 'loadmask',
            message: 'Adding New Jog...'
        });

        Ext.Ajax.request({
            url: '/run',
            method: 'POST',
            params: {
                location: location,
                distance: distance
            },
            callback: this.onAddShout,
            scope: this
        });
    },

    onAddShout: function(options, success, response) {
        Ext.getCmp('runForm').setMasked(false);
        this.hideForm();
        Ext.getStore('Shouts').load();
    }
});
