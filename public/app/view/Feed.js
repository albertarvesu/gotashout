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

        var shoutList = Ext.getCmp('shoutList');
        var me = this;
        
        Ext.getStore('Shouts').on('load', function(store) {

            if (!shoutList) {
                shoutList = Ext.create('Gotashout.view.shout.List', {
                    id: 'shoutList'
                });
            }

            me.setActiveItem(shoutList);
        });
    }
});