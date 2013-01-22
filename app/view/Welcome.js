Ext.define('DIT.view.Welcome', {
    extend: 'Ext.Panel',
    xtype: 'welcometext',

    config: {
        defaults: {
            styleHtmlContent: true
        },
        items: [{
            html: '<img class="survey_logo" src="touch/resources/images/do-it-together-circle.png">',
            style: {
                height: '100px'
            }
        },
        {
            xtype: 'logincard',
            style: {
                height: '200px'
            }
        }]
    }
});