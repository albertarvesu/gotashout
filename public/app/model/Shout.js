
Ext.define('Gotashout.model.Shout', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            { name: 'mood',  type: 'string' },
            { name: 'text',      type: 'string' },
            { name: 'location',  type: 'string' },
            { name: 'profileId', type: 'number' },
            { name: 'name',      type: 'string' },
            { name: 'createdDate',      type: 'date' }
        ]
    }
});
