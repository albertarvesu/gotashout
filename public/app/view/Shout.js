Ext.define('Gotashout.view.Shout', {
    extend: 'Ext.Panel',
    xtype: 'shoutcard',

    config: {
        iconCls: 'compose',

        title: 'Shout',
        styleHtmlContent: true,
        cls: 'styledContent',
        scrollable: 'vertical',
        items: [
            {
                xtype: 'fieldset',
                id: 'shoutform',
                items: [
                    {
                        xtype: 'selectfield',
                        name : 'mood',
                        label: 'Mood',
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
                        label: 'Shout',
                        placeholder: 'Tell us why'
                    },
                    {
                        xtype: 'textfield',
                        name : 'location',
                        label: 'Location',
                        placeholder: 'Where are you?'
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
                        ui: 'decline'
                        id: 'cancelShoutBtn'
                    }
                ]
            }
        ]
    }
});