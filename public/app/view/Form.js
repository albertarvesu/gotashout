Ext.define('Gotashout.view.Form', {
    extend: 'Ext.Panel',
    xtype: 'formcard',

    config: {
        iconCls: 'compose',
        title: 'Post',
        layout: 'card',
        styleHtmlContent: true,
        scrollable: 'vertical',
        items: [
            {
                xtype: 'fieldset',
                id: 'shoutForm',
                items: [
                    {
                        xtype: 'selectfield',
                        name : 'mood',
                        id : 'mood',
                        label: 'How are you feeling?',
                        options: [
                            {
                                text : 'Happy',
                                value: 'happy'
                            },
                            {
                                text : 'Sad',
                                value: 'Sad'
                            },
                            {
                                text : 'Angry',
                                value: 'angry'
                            }
                        ]
                    },
                    {
                        xtype: 'textareafield',
                        name : 'text',
                        id : 'text',
                        label: 'Tell us why'
                    },
                    {
                        xtype: 'textfield',
                        name : 'location',
                        id : 'location',
                        label: 'Where?'
                    },
                    {
                        xtype: 'gmap'
                    }
                ]
            },
            {
                xtype: 'panel',
                defaults: {
                    xtype: 'button',
                    style: 'margin: 0.1em',
                    flex : 1
                },
                layout: {
                    type: 'hbox'
                },
                items: [
                    {
                        text: 'Shout',
                        xtype: 'button',
                        ui: 'action',
                        id: 'addShoutBtn'
                    },
                    {
                        text: 'Cancel',
                        xtype: 'button',
                        ui: 'decline',
                        id: 'cancelShoutBtn'
                    }
                ]
            }
        ]
    }
});