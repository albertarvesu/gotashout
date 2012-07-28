Ext.define('Gotashout.view.shout.List', {
    extend: 'Ext.List',

    config: {
        store: 'Shouts',

        disableSelection: true,

        itemTpl: Ext.create('Ext.XTemplate',
            '<div class="shout">',
                '<blockquote class="text">{text}</blockquote>',
                '<span>{location}</span>',
                '<time>{[this.timeAgoInWords(values.createdDate)]}</time>',
            '</div>',
            '<div class="picture">',
                '<img src="https://graph.facebook.com/{profileId}/picture?type=square">',
                '<span class="mood">{name} is {mood}</span>',
            '</div>',
            {
                timeAgoInWords: function(date) {
                    try {

                        var now = Math.ceil(Number(new Date()) / 1000),
                            dateTime = Math.ceil(Number(date) / 1000),
                            diff = now - dateTime,
                            str;

                        if (diff < 0) diff = -diff;

                        if (diff < 86400) {
                            return 'Today';
                        } else if (diff < 60*60*24*365) {
                            str = String(Math.ceil(diff / (60 * 60 * 24)));
                            return str + (str == "1" ? ' day' : ' days') + ' ago';
                        } else {
                            return Ext.Date.format(new Date(date), 'jS M \'y');
                        }
                    } catch(e) {
                        return '';
                    }
                }
            }
        )
    }
});
