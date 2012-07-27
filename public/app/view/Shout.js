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
                        name : 'shout',
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
                        scope: this,
                        handler: function(btn){
                            /*
                            var form = Ext.getCmp('shoutform');

                            if (btn.hasDisabled) {
                                form.enable();
                                btn.hasDisabled = false;
                                btn.setText('Disable fields');
                            } else {
                                form.disable();
                                btn.hasDisabled = true;
                                btn.setText('Enable fields');
                            }
                            */
                        }
                    },
                    {
                        text: 'Cancel',
                        xtype: 'button',
                        ui: 'decline',
                        handler: function(){
                            //Ext.getCmp('shoutform').reset();
                        }
                    }
                ]
            }
        ]
    }
});