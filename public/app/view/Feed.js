Ext.define('Gotashout.view.Feed', {
    extend: 'Ext.Container',
    xtype: 'feedcard',

    requires: [
        'Gotashout.view.shout.List'
    ],

    config: {
        iconCls: 'team',
        title: 'Feeds',
        layout: 'card',
        styleHtmlContent: true,
        cls: 'styledContent',
        scrollable: 'vertical'
    },

    initialize: function initialize() {
        this.callParent();
        Ext.getStore('Shouts').on('load', this.onShoutsLoad);
    },

    onShoutsLoad: function onShoutsLoad() {
        var shoutList = Ext.getCmp('shoutList');

        if (!shoutList) {
            shoutList = Ext.create('Gotashout.view.shout.List', {
                id: 'shoutList'
            });
        }

        this.setActiveItem(shoutList);
    }

});