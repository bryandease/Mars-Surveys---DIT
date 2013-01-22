Ext.define('DIT.view.Finished', {
    extend: 'Ext.Panel',
    xtype: 'finished',

    config: {
        fullscreen: true,
        padding: 4,
        defaults: {
            margin: 5
        },
        items: [{
            html: '<img class="survey_logo" src="touch/resources/images/do-it-together-circle.png"><h1>Thank You!</h1><p class="question_text">This completes your survey.<br>Press the button below to log out.</p>',
            style: {
                height: '100px'
            }
        }, {
            action: 'restartapp',
            xtype: 'button',
            ui: 'decline',
            text: 'Log Out',
            width: 300,
            height: 50,
            style: {
                fontSize: '130%'
            },
            centered: true
        }]
    }
});