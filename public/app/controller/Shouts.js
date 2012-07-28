/**
 * The class controls the adding of new Shouts to the database.
 */
Ext.define('Gotashout.controller.Shouts', {
    extend: 'Ext.app.Controller',

    config: {
        control: {
            '#addShoutButton': {
                tap: 'addShout'
            },
            '#showFormButton': {
                tap: 'showForm'
            },
            '#addShoutBackBtn': {
                tap: 'hideForm'
            }
        }
    },

    init: function() {
        this.callParent();

        Ext.getStore('Shouts').on('load', this.onShoutsLoad);
    },

    onShoutsLoad: function(store) {
        console.log("store", store);
        return;
        var main = Ext.getCmp('main'),
            runList = Ext.getCmp('runList'),
            noFriends = Ext.getCmp('noFriends');

        if (store.getCount()) {
            if (!runList) {
                runList = Ext.create('Gotashout.view.run.List', {
                    id: 'runList'
                });
            }
            main.setActiveItem(runList);
        } else {
            if (!noFriends) {
                noFriends = Ext.create('Gotashout.view.NoFriends', {
                    id: 'noFriends',
                    data: Gotashout.userData
                });
            }
            main.setActiveItem(noFriends);
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

    addShout: function() {

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
