
Ext.define('Gotashout.store.Shouts', {
    extend  : 'Ext.data.Store',
    requires: [
        'Gotashout.model.Shout'
    ],

    config: {
        model: 'Gotashout.model.Shout',
        autoLoad: true,

        proxy: {
            type: 'jsonp',
            url: '/shouts'
        }
    }
});
