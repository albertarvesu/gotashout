Ext.define('Gotashout.view.Feed', {
    extend: 'Ext.Panel',
    xtype: 'feedcard',

    config: {
        iconCls: 'team',
        title: 'Feeds',
        styleHtmlContent: true,
        cls: 'styledContent',
        scrollable: 'vertical',
        html: "Feeds"
    }
});