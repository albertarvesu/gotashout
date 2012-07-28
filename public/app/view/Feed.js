Ext.define('Gotashout.view.Feed', {
    extend: 'Ext.Panel',
    xtype: 'feedcard',

    requires: [
        'Gotashout.view.shout.List'
    ],

    config: {
        iconCls: 'team',
        title: 'Feeds',
        styleHtmlContent: true,
        cls: 'styledContent',
        scrollable: 'vertical'
    }
});