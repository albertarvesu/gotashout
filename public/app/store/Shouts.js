
Ext.define('Gotashout.store.Shouts', {
    extend  : 'Ext.data.Store',

    config: {
        model: 'Gotashout.model.Shout',

        proxy: {
            type: 'jsonp',
            url: '/runs'
        }
    }
});
