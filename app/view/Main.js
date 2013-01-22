Ext.define('DIT.view.Main', {
    extend: 'Ext.Panel',
    xtype: 'mainpanel',

    requires: [
        'DIT.view.Welcome',
        'DIT.view.Login',
        'DIT.view.Instructions',
        'DIT.view.Thoughts',
        'DIT.view.Finished'
    ],

    config: {
        layout: 'card',
        fullscreen: true,
        items: [
            { xtype: 'welcometext' },
            { xtype: 'instructions' },
            { xtype: 'thoughts' },
            { xtype: 'finished' }
        ]
    }
});