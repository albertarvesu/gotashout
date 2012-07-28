
Ext.define('Gotashout.store.Shouts', {
    extend  : 'Ext.data.Store',

    config: {
        model: 'Gotashout.model.shout',

        proxy: {
            type: 'jsonp',
            url: '/runs'
        }
    }
});
